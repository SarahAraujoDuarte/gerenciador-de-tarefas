const userTasksModel = require('../models/user_tasksModel');

async function test() {
  const userTasks = await userTasksModel.getAllUserTasks();
  console.log('UserTasks:', userTasks);
}

test();
