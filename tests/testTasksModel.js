const tasksModel = require('../models/tasksModel');

async function test() {
  const tasks = await tasksModel.getAllTasks();
  console.log('Tasks:', tasks);
}

test();
