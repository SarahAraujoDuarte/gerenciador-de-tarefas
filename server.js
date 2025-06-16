const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const workspaceRoutes = require('./routes/workspacesRoutes');

app.use('/workspaces', workspaceRoutes);

app.use(session({
  secret: 'planeja_ai_super_secreto', // use uma string segura e única
  resave: false,
  saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const apiRoutes = require('./routes');                 
const frontRoutes = require('./routes/frontRoutes');   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));       
app.use(express.static('public'));  
               
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

function verificarAutenticacao(req, res, next) {
  if (req.session && req.session.userId) {
    return next(); // usuário autenticado, segue para a rota
  } else {
    return res.redirect('/login'); // se não estiver logado, redireciona
  }
}
app.get('/home', (req, res) => {
  res.render('home'); 
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/api', apiRoutes);

app.use('/', frontRoutes);

app.get('/home', verificarAutenticacao, (req, res) => {
  res.render('home');
});

app.use((req, res) => {
  res.status(404).send('Página não encontrada!');
});

app.post('/workspace/create', (req, res) => {
    const { workspaceName, workspaceDescription } = req.body;
    
    // Validar dados
    if (!workspaceName || workspaceName.trim() === '') {
        return res.redirect('/home?error=nome-obrigatorio');
    }
    
    // Criar novo workspace
    const newWorkspace = {
        id: workspaceIdCounter++,
        name: workspaceName.trim(),
        description: workspaceDescription ? workspaceDescription.trim() : '',
        createdAt: new Date().toLocaleDateString('pt-BR'),
        tasks: []
    };
    
    // Adicionar ao "banco de dados"
    workspaces.push(newWorkspace);
    
    console.log('Workspace criado:', newWorkspace);
    
    // Redirecionar para a página do workspace
    res.redirect(`/workspace/${newWorkspace.id}`);
});

// Rota para exibir workspace específico
app.get('/workspace/:id', (req, res) => {
    const workspaceId = parseInt(req.params.id);
    
    // Verificar se o ID é válido
    if (isNaN(workspaceId)) {
        console.log('ID inválido:', req.params.id);
        return res.redirect('/home?error=id-invalido');
    }
    
    const workspace = workspaces.find(w => w.id === workspaceId);
    
    if (!workspace) {
        console.log('Workspace não encontrado:', workspaceId);
        console.log('Workspaces disponíveis:', workspaces);
        return res.redirect('/home?error=workspace-nao-encontrado');
    }
    
    console.log('Renderizando workspace:', workspace);
    res.render('workspace', { workspace });
});

// Rota para criar nova tarefa (POST)
app.post('/workspace/:id/task', (req, res) => {
    const workspaceId = parseInt(req.params.id);
    const workspace = workspaces.find(w => w.id === workspaceId);
    
    if (!workspace) {
        return res.status(404).json({ error: 'Workspace não encontrado' });
    }
    
    const { title, description, priority, status } = req.body;
    
    // Validar dados
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Título é obrigatório' });
    }
    
    const newTask = {
        id: Date.now(), // ID simples baseado em timestamp
        title: title.trim(),
        description: description ? description.trim() : '',
        priority: priority || 'medium',
        status: status || 'todo',
        createdAt: new Date().toISOString()
    };
    
    workspace.tasks.push(newTask);
    
    console.log('Tarefa criada:', newTask);
    
    res.json({ success: true, task: newTask });
});

// Rota para listar todos os workspaces (para debug)
app.get('/debug/workspaces', (req, res) => {
    res.json({
        total: workspaces.length,
        workspaces: workspaces
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
