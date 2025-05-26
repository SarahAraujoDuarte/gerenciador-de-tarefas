const pool = require('../config/database');

const Workspaces = {
  
  async create(workspace) {
    const { nome, descricao } = workspace;
    const query = `
      INSERT INTO workspaces (nome, descricao)
      VALUES ($1, $2) RETURNING *;
    `;
    const values = [nome, descricao];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM workspaces');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM workspaces WHERE id = $1', [id]);
    return rows[0];
  },

  async update(id, workspace) {
    const { nome, descricao } = workspace;
    const query = `
      UPDATE workspaces
      SET nome = $1, descricao = $2
      WHERE id = $3 RETURNING *;
    `;
    const values = [nome, descricao, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM workspaces WHERE id = $1', [id]);
  },
};

module.exports = Workspaces;
