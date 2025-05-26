const workspacesModel = require('../models/workspacesModel');

async function test() {
  const workspaces = await workspacesModel.getAllWorkspaces();
  console.log('Workspaces:', workspaces);
}

test();
