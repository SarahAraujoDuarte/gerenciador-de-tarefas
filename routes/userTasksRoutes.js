const express = require('express');
const router = express.Router();
const user_tasksController = require('../controllers/user_tasksController');

router.post('/', user_tasksController.create);
router.get('/user/:user_id', user_tasksController.findTasksByUser);
router.get('/task/:task_id', user_tasksController.findUsersByTask);
router.delete('/:user_id/:task_id', user_tasksController.delete);

module.exports = router;

