const pool = require('../config/database');

const UsersTasks = {
  async assignTaskToUser(userId, taskId) {
    const query = `
      INSERT INTO users_tasks (user_id, task_id)
      VALUES ($1, $2) RETURNING *;
    `;
    const values = [userId, taskId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async removeTaskFromUser(userId, taskId) {
    const query = `
      DELETE FROM users_tasks
      WHERE user_id = $1 AND task_id = $2;
    `;
    await pool.query(query, [userId, taskId]);
  },

  async findTasksByUser(userId) {
    const query = `
      SELECT tasks.*
      FROM tasks
      JOIN users_tasks ON tasks.id = users_tasks.task_id
      WHERE users_tasks.user_id = $1;
    `;
    const { rows } = await pool.query(query, [userId]);
    return rows;
  },

  async findUsersByTask(taskId) {
    const query = `
      SELECT users.*
      FROM users
      JOIN users_tasks ON users.id = users_tasks.user_id
      WHERE users_tasks.task_id = $1;
    `;
    const { rows } = await pool.query(query, [taskId]);
    return rows;
  }
};

module.exports = UsersTasks;