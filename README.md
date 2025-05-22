# Gerenciador de Tarefas

## 📝 Descrição do Sistema

Este projeto trata-se de um sistema de gerenciamento de tarefas que permite aos usuários criar, organizar e acompanhar tarefas por categoria dentro de áreas de trabalho. O sistema foi desenvolvido para ajudar estudantes a aumentar a produtividade e melhorar seu desempenho em suas tarefas diarias. 

## 📁 Estrutura de Pastas e Arquivos
```
meu-projeto/
│
├── assets/                # Arquivos públicos como imagens e fontes
├── config/                
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── scripts/               # Arquivos de JavaScript públicos
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .env                   # Arquivo de exemplo para variáveis de ambiente
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
└── server.js              # Arquivo principal que inicializa o servidor
```

## 🚀 Como Executar o Projeto Localmente

1. **Clonar o repositório:**

bash
   git clone https://github.com/SarahAraujoDuarte/gerenciador-de-tarefas.git
   cd seu-projeto


2. *Instalar as dependências:*
    
bash
npm install

    
3. *Configurar o arquivo .env:*
    
Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.
    

Configuração do Banco de Dados
------------------------------

1. *Criar banco de dados:*
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo .env.
    
2. *Executar o script SQL de inicialização:*
    
bash
npm run init-db

    
Isso criará a tabela users no seu banco de dados PostgreSQL com UUID como chave primária e inserirá alguns registros de exemplo.
    

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

