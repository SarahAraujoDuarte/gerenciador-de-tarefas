const Users = require('../models/userModel');

const usersController = {
  async create(req, res) {
    try {
      const userData = req.body;
      const newUser = await Users.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao criar usuário' });
    }
  },

  async findAll(req, res) {
    try {
      const users = await Users.findAll();
      res.json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro interno ao buscar usuários' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await Users.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao buscar usuário' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await Users.update(id, userData);
      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado para atualização' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar usuário' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Users.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao deletar usuário' });
    }
  }
};

module.exports = usersController;
