const columnsModel = require('../models/columnsModel');

async function test() {
  const columns = await columnsModel.getAllColumns();
  console.log('Columns:', columns);
}

test();
