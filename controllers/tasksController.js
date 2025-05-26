const Tasks = require('../models/tasksModel'); 
const tasksController = {

  async create(req, res) {
    try {
      const taskData = req.body;
      const newTask = await Tasks.create(taskData);
      res.status(201).json(newTask);
    } catch (error) {
      console.error('Erro ao criar task:', error);
      res.status(500).json({ error: 'Erro interno ao criar a tarefa' });
    }
  },

  async findAll(req, res) {
    try {
      const tasks = await Tasks.findAll();
      res.json(tasks);
    } catch (error) {
      console.error('Erro ao buscar tasks:', error);
      res.status(500).json({ error: 'Erro interno ao buscar tarefas' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const task = await Tasks.findById(id);
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      res.json(task);
    } catch (error) {
      console.error('Erro ao buscar task:', error);
      res.status(500).json({ error: 'Erro interno ao buscar tarefa' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const taskData = req.body;
      const updatedTask = await Tasks.update(id, taskData);
      if (!updatedTask) {
        return res.status(404).json({ error: 'Tarefa não encontrada para atualização' });
      }
      res.json(updatedTask);
    } catch (error) {
      console.error('Erro ao atualizar task:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar tarefa' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Tasks.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar task:', error);
      res.status(500).json({ error: 'Erro interno ao deletar tarefa' });
    }
  }

};

module.exports = tasksController;
