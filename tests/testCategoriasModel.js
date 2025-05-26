const categoriasModel = require('../models/categoriasModel');

async function test() {
  const categorias = await categoriasModel.getAllCategorias();
  console.log('Categorias:', categorias);
}

test();
