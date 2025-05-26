const pool = require('../config/database');

const columns = {
  
  async create(column) {
    const { workspace_id, nome, posicao } = column;
    const query = `
      INSERT INTO columns (workspace_id, nome, posicao)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [workspace_id, nome, posicao];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM columns');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM columns WHERE id = $1', [id]);
    return rows[0];
  },

  async update(id, column) {
    const { workspace_id, nome, posicao } = column;
    const query = `
      UPDATE columns
      SET workspace_id = $1, nome = $2, posicao = $3
      WHERE id = $4 RETURNING *;
    `;
    const values = [workspace_id, nome, posicao, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM columns WHERE id = $1', [id]);
  },
};

module.exports = columns;