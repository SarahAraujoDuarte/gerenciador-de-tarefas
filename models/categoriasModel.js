const pool = require('../config/database');

const categorias = {
  
  async create(categoria) {
    const { nome, cor } = categoria;
    const query = `
      INSERT INTO categorias (nome, cor)
      VALUES ($1, $2) RETURNING *;
    `;
    const values = [nome, cor];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM categorias');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
    return rows[0];
  },

  async update(id, categoria) {
    const { nome, cor, criado_em } = categoria;
    const query = `
      UPDATE categorias
      SET nome = $1, cor = $2
      WHERE id = $3 RETURNING *;
    `;
    const values = [nome, cor, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM categorias WHERE id = $1', [id]);
  },
};

module.exports = categorias;
