const Columns = require('../models/columnsModel');

const columnsController = {

  async create(req, res) {
    try {
      const columnsData = req.body;
      const newColumns = await Columns.create(columnsData);
      res.status(201).json(newColumns);
    } catch (error) {
      console.error('Erro ao criar coluna:', error);
      res.status(500).json({ error: 'Erro interno ao criar a coluna' });
    }
  },

  async findAll(req, res) {
    try {
      const columns = await Columns.findAll();
      res.json(columns);
    } catch (error) {
      console.error('Erro ao buscar columns:', error);
      res.status(500).json({ error: 'Erro interno ao buscar colunas' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const columns = await Columns.findById(id);
      if (!columns) {
        return res.status(404).json({ error: 'Coluna não encontrada' });
      }
      res.json(columns);
    } catch (error) {
      console.error('Erro ao buscar columns:', error);
      res.status(500).json({ error: 'Erro interno ao buscar columns' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const columnsData = req.body;
      const updatedColumns = await Columns.update(id, columnsData);
      if (!updatedColumns) {
        return res.status(404).json({ error: 'Coluna não encontrada para atualização' });
      }
      res.json(updatedColumns);
    } catch (error) {
      console.error('Erro ao atualizar coluna:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar coluna' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Columns.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar coluna:', error);
      res.status(500).json({ error: 'Erro interno ao deletar coluna' });
    }
  }

};

module.exports = columnsController;
