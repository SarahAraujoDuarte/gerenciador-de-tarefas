const UserTasks = require('../models/user_tasksModel');

const user_tasksController = {

  // 🔹 Criar vínculo entre usuário e tarefa
  async create(req, res) {
    try {
      const { user_id, task_id } = req.body;
      const newUserTask = await UserTasks.create(user_id, task_id);
      res.status(201).json(newUserTask);
    } catch (error) {
      console.error('Erro ao criar vínculo user-task:', error);
      res.status(500).json({ error: 'Erro interno ao criar vínculo' });
    }
  },

  // 🔹 Buscar todos os vínculos
  async findAll(req, res) {
    try {
      const userTasks = await UserTasks.findAll();
      res.json(userTasks);
    } catch (error) {
      console.error('Erro ao buscar vínculos user-task:', error);
      res.status(500).json({ error: 'Erro interno ao buscar vínculos' });
    }
  },

  // 🔹 Buscar vínculo específico por user_id e task_id
  async findByIds(req, res) {
    try {
      const { user_id, task_id } = req.params;
      const userTask = await UserTasks.findByIds(user_id, task_id);
      if (!userTask) {
        return res.status(404).json({ error: 'Vínculo não encontrado' });
      }
      res.json(userTask);
    } catch (error) {
      console.error('Erro ao buscar vínculo:', error);
      res.status(500).json({ error: 'Erro interno ao buscar vínculo' });
    }
  },

  // 🔹 Deletar vínculo
  async delete(req, res) {
    try {
      const { user_id, task_id } = req.params;
      await UserTasks.delete(user_id, task_id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar vínculo:', error);
      res.status(500).json({ error: 'Erro interno ao deletar vínculo' });
    }
  },

};

module.exports = user_tasksController;