const express = require('express');
const router = express.Router();
const user_tasksController = require('../controllers/user_tasksController');

router.post('/', user_tasksController.create);
router.get('/', user_tasksController.findAll);
router.get('/:user_id/:task_id', user_tasksController.findByIds);
router.delete('/:user_id/:task_id', user_tasksController.delete);

module.exports = router;

