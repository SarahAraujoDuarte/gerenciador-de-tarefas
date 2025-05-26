const Categorias = require('../models/categoriasModel');

const categoriasController = {

  async create(req, res) {
    try {
      const categoriaData = req.body;
      const newCategoria = await Categorias.create(categoriaData);
      res.status(201).json(newCategoria);
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      res.status(500).json({ error: 'Erro interno ao criar a categoria' });
    }
  },

  async findAll(req, res) {
    try {
      const categorias = await Categorias.findAll();
      res.json(categorias);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      res.status(500).json({ error: 'Erro interno ao buscar categorias' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categorias.findById(id);
      if (!categoria) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      res.json(categoria);
    } catch (error) {
      console.error('Erro ao buscar categoria:', error);
      res.status(500).json({ error: 'Erro interno ao buscar categoria' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const categoriaData = req.body;
      const updatedCategoria = await Categorias.update(id, categoriaData);
      if (!updatedCategoria) {
        return res.status(404).json({ error: 'Categoria não encontrada para atualização' });
      }
      res.json(updatedCategoria);
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar categoria' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Categorias.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
      res.status(500).json({ error: 'Erro interno ao deletar categoria' });
    }
  }

};

module.exports = categoriasController;
