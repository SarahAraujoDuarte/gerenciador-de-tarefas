CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  foto_perfil TEXT NULL, 
  nome TEXT NOT NULL,
  profissao TEXT NOT NULL,
  email TEXT NOT NULL,
  senha TEXT NOT NULL
); 

CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  cor TEXT NOT NULL, 
  criado_em TIMESTAMP DEFAULT NOW ()
  );

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL, 
  categorias_id INT REFERENCES categorias(id),
  tamanho TEXT NOT NULL,
  data timestamp DEFAULT NOW(),
  status TEXT NOT NULL, 
  descricao TEXT NOT NULL
);


CREATE TABLE users_tasks (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, task_id)
  );

CREATE TABLE workspaces(
  id SERIAl PRIMARY KEY,
  nome TEXT NOT NULL, 
  descricao TEXT NOT NULL, 
  criado_em TIMESTAMP DEFAULT NOW ()
);

CREATE TABLE columns (
  id SERIAL PRIMARY KEY, 
  workspace_id INT REFERENCES workspaces(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  posicao INT NOT NULL
);

ALTER TABLE tasks
ADD COLUMN column_id INT REFERENCES columns(id) ON DELETE SET NULL,
ADD COLUMN workspace_id INT REFERENCES workspaces(id) ON DELETE SET NULL;

SELECT tasks.id, 
       tasks.titulo, 
       categorias.nome AS categoria_nome
FROM tasks
JOIN categorias ON tasks.categorias_id = categorias.id;


SELECT users.nome AS usuário, 
       tasks.titulo AS tarefa,
       tasks.status
FROM users
JOIN users_tasks ON users.id = users_tasks.user_id
JOIN tasks ON users_tasks.task_id = tasks.id;