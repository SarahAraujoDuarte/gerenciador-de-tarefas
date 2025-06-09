const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes');                 
const frontRoutes = require('./routes/frontRoutes');   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));       
app.use(express.static('public'));                     

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/api', apiRoutes);

app.use('/', frontRoutes);

app.use((req, res) => {
  res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
