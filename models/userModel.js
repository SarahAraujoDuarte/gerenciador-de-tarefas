const pool = require('../config/database');

const user = {
  async create(user) {
    const { nome, profissao, email, senha, foto_perfil } = user;
    const query = `
      INSERT INTO users (nome, profissao, email, senha, foto_perfil)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [nome, profissao, email, senha, foto_perfil];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0];
  },

   async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
  },
  
  async update(id, user) {
    const { nome, profissao, email, senha, foto_perfil } = user;
    const query = `
      UPDATE users SET nome=$1, profissao=$2, email=$3, senha=$4, foto_perfil=$5
      WHERE id = $6 RETURNING *;
    `;
    const values = [nome, profissao, email, senha, foto_perfil, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  },
};

module.exports = user;
