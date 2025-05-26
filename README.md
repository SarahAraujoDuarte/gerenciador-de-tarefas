# Gerenciador de Tarefas

## Descrição do Sistema

Este projeto trata-se de um sistema de gerenciamento de tarefas que permite aos usuários criar, organizar e acompanhar tarefas por categoria dentro de áreas de trabalho. O sistema foi desenvolvido para ajudar estudantes a aumentar a produtividade e melhorar seu desempenho em suas tarefas diarias. 

## Estrutura de Pastas e Arquivos
```
gerenciador-de-tarefas/
│
├── assets/              
├── config/                
│   └── database.js        
├── controllers/           
│   ├── categoriasController.js
│   ├── columnsController.js
│   ├── tasksController.js
│   ├── user_tasksController.js
│   ├── workspacesController.js
├── documentos
│   ├── assets
│   ├── WAD.md  
├── models/               
│   ├── categoriasModel.js
│   ├── columnsModel.js
│   ├── tasksModel.js
│   ├── userModel.js
│   ├── user_tasksModel.js
│   └── workspacesModel.js
├── routes/                
│   ├── categoriasRoutes.js
│   ├── columnsRoutes.js
│   ├── tasksRoutes.js
│   ├── userTasksRoutes.js
│   ├── workspacesRoutes.js
│   └── index.js           
├── scripts/ 
│   ├── winit.sql
│   └── runSQLscript.js                
├── services/              
│   └── userService.js
├── styles/                
├── tests/                 
│   └── testCategoriasModel.js
│   ├── testColumnsModel.js
│   ├── testTasksModel.js
│   ├── testUser_tasksModel.js
│   ├── testUserModel.js
│   └── tesWorkspacesModel.js   
├── .env                   
├── .gitignore             
├── jest.config.js         
├── package-lock.json      
├── package.json           
├── readme.md             
└── server.js             

```

##  Como Executar o Projeto Localmente

1. **Clonar o repositório:**

bash
   git clone https://github.com/SarahAraujoDuarte/gerenciador-de-tarefas.git
   cd seu-projeto


2. *Instalar as dependências:*
    
bash
npm install
    
3. *Caminho para a execução do projeto:*

Para realexecutar o projeto, navegue até a seguinte pasta: gerenciador-de-tarefas/routes no terminal e execute o comando 'node index.js'. Em seguida, abra o navegador e acesse: http://localhost:3000/ para visualizar o projeto em funcionamento. 


## Configuração do Banco de Dados
 
 1. instale o postgree caso ainda não possua em sua máquina
 2. Crie o Banco de Dados utilizando o comando 

 ´´´sql
 CREATE DATABASE gerenciador_tarefas;
´´´

 3. Configure o arquivo .env na raiz do projeto de acordo com seu banco de dados contendo: 

 DB_USER=seu_usuario
 DB_PASS=sua_senha
 DB_HOST=localhost
 DB_NAME=gerenciador_tarefas
 DB_PORT=5432

 4. Execute no terminal o script SQL a partir do comando: 
 psql -U seu_usuario -d gerenciador_tarefas -f ./scripts/winit.sql


 5. Teste a conexão com o comando: npm start

## Rotas Disponiveis 

| Método | Endpoint          | Descrição                        |
| ------ | ----------------- | -------------------------------- |
| GET    | `/categorias`     | Listar todas categorias          |
| POST   | `/categorias`     | Criar nova categoria             |
| GET    | `/categorias/:id` | Buscar categoria por ID          |
| PUT    | `/categorias/:id` | Atualizar categoria por ID       |
| DELETE | `/categorias/:id` | Deletar categoria por ID         |
| GET    | `/columns`        | Listar todas colunas             |
| POST   | `/columns`        | Criar nova coluna                |
| GET    | `/columns/:id`    | Buscar coluna por ID             |
| PUT    | `/columns/:id`    | Atualizar coluna por ID          |
| DELETE | `/columns/:id`    | Deletar coluna por ID            |
| GET    | `/tasks`          | Listar todas tarefas             |
| POST   | `/tasks`          | Criar nova tarefa                |
| GET    | `/tasks/:id`      | Buscar tarefa por ID             |
| PUT    | `/tasks/:id`      | Atualizar tarefa por ID          |
| DELETE | `/tasks/:id`      | Deletar tarefa por ID            |
| GET    | `/workspaces`     | Listar todas workspaces          |
| POST   | `/workspaces`     | Criar novo workspace             |
| GET    | `/workspaces/:id` | Buscar workspace por ID          |
| PUT    | `/workspaces/:id` | Atualizar workspace por ID       |
| DELETE | `/workspaces/:id` | Deletar workspace por ID         |
| GET    | `/user-tasks`     | Listar todas tarefas de usuários |
| POST   | `/user-tasks`     | Criar tarefa para usuário        |
| GET    | `/user-tasks/:id` | Buscar tarefa de usuário por ID  |
| PUT    | `/user-tasks/:id` | Atualizar tarefa de usuário      |
| DELETE | `/user-tasks/:id` | Deletar tarefa de usuário        |


Funcionalidades
---------------

* *Padrão MVC:* Estrutura organizada em Model, View e Controller.
* *PostgreSQL:* Banco de dados relacional utilizado para persistência dos dados.
* *UUID:* Utilização de UUID como chave primária na tabela users.
* *Scripts com nodemon:* Utilização do nodemon para reiniciar automaticamente o servidor após alterações no código.
* *Testes:* Inclui estrutura básica para testes automatizados.

Scripts Disponíveis
-------------------

* npm start: Inicia o servidor Node.js.
* npm run dev: Inicia o servidor com nodemon, reiniciando automaticamente após alterações no código.
* npm run test: Executa os testes automatizados.
* npm run test:coverage: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

* *config/*: Configurações do banco de dados e outras configurações do projeto.
* *controllers/*: Controladores da aplicação (lógica de negócio).
* *models/*: Modelos da aplicação (definições de dados e interações com o banco de dados).
* *routes/*: Rotas da aplicação.
* *tests/*: Testes automatizados.
* *views/*: Views da aplicação.

