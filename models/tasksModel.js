const pool = require('../config/database');

const tasks = {
  
  async create(tasks) {
    const { titulo, categorias_id, tamanho, status, descricao } = tasks;
    const query = `
      INSERT INTO tasks (titulo, categorias_id, tamanho, status, descricao)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [titulo, categorias_id, tamanho, status, descricao];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM tasks');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return rows[0];
  },

  async update(id, tasks) {
    const { titulo, categorias_id, tamanho, status, descricao } = tasks;
    const query = `
      UPDATE tasks
      SET titulo = $1, categorias_id = $2, tamanho = $3, status = $4, descricao = $5
      WHERE id = $6 RETURNING *;
    `;
    const values = [titulo, categorias_id, tamanho, status, descricao, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  },

  async findAllWithCategoria() {
    const query = `
      SELECT tasks.*, categorias.nome AS categoria_nome
      FROM tasks
      JOIN categorias ON tasks.categorias_id = categorias.id;
    `;
    const { rows } = await pool.query(query);
    return rows;
  }
};

module.exports = tasks;
