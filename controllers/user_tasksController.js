const UserTasks = require('../models/user_tasksModel');

const user_tasksController = {
  async create(req, res) {
    try {
      const { user_id, task_id } = req.body;
      const newUserTask = await UserTasks.assignTaskToUser(user_id, task_id);
      res.status(201).json(newUserTask);
    } catch (error) {
      console.error('Erro ao criar vínculo user-task:', error);
      res.status(500).json({ error: 'Erro interno ao criar vínculo' });
    }
  },

  async findTasksByUser(req, res) {
    try {
      const { user_id } = req.params;
      const tasks = await UserTasks.findTasksByUser(user_id);
      res.json(tasks);
    } catch (error) {
      console.error('Erro ao buscar tarefas do usuário:', error);
      res.status(500).json({ error: 'Erro interno ao buscar tarefas do usuário' });
    }
  },

  async findUsersByTask(req, res) {
    try {
      const { task_id } = req.params;
      const users = await UserTasks.findUsersByTask(task_id);
      res.json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários da tarefa:', error);
      res.status(500).json({ error: 'Erro interno ao buscar usuários da tarefa' });
    }
  },

  async delete(req, res) {
    try {
      const { user_id, task_id } = req.params;
      await UserTasks.removeTaskFromUser(user_id, task_id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar vínculo:', error);
      res.status(500).json({ error: 'Erro interno ao deletar vínculo' });
    }
  },
};

module.exports = user_tasksController;
