const express = require('express');
const router = express.Router();

const categoriasRoutes = require('./categoriasRoutes');
const columnsRoutes = require('./columnsRoutes');
const tasksRoutes = require('./tasksRoutes');
const workspacesRoutes = require('./workspacesRoutes');
const userTasksRoutes = require('./userTasksRoutes');
const userRoutes = require('./userRoutes');

router.use('/categorias', categoriasRoutes);
router.use('/columns', columnsRoutes);
router.use('/tasks', tasksRoutes);
router.use('/workspaces', workspacesRoutes);
router.use('/user-tasks', userTasksRoutes);
router.use('/users', userRoutes);

module.exports = router;
