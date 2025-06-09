const Workspaces = require('../models/workspacesModel');

const workspacesController = {
  async renderHome(req, res) {
    try {
      const workspaces = await Workspaces.findAll();
      res.render('home', { workspaces });
    } catch (error) {
      console.error('Erro ao carregar a home:', error);
      res.status(500).send('Erro interno ao carregar a home');
    }
  },

  async create(req, res) {
    try {
      const workspaceData = req.body;
      const newWorkspace = await Workspaces.create(workspaceData);
      res.status(201).json(newWorkspace);
    } catch (error) {
      console.error('Erro ao criar workspace:', error);
      res.status(500).json({ error: 'Erro interno ao criar workspace' });
    }
  },

  async findAll(req, res) {
    try {
      const workspaces = await Workspaces.findAll();
      res.json(workspaces);
    } catch (error) {
      console.error('Erro ao buscar workspaces:', error);
      res.status(500).json({ error: 'Erro interno ao buscar workspaces' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const workspace = await Workspaces.findById(id);
      if (!workspace) {
        return res.status(404).json({ error: 'Workspace não encontrado' });
      }
      res.json(workspace);
    } catch (error) {
      console.error('Erro ao buscar workspace:', error);
      res.status(500).json({ error: 'Erro interno ao buscar workspace' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const workspaceData = req.body;
      const updatedWorkspace = await Workspaces.update(id, workspaceData);
      if (!updatedWorkspace) {
        return res.status(404).json({ error: 'Workspace não encontrado para atualização' });
      }
      res.json(updatedWorkspace);
    } catch (error) {
      console.error('Erro ao atualizar workspace:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar workspace' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Workspaces.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar workspace:', error);
      res.status(500).json({ error: 'Erro interno ao deletar workspace' });
    }
  }
};

module.exports = workspacesController;
