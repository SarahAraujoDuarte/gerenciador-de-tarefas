const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.post('/', tasksController.create);
router.get('/', tasksController.findAll);
router.get('/:id', tasksController.findById);
router.put('/:id', tasksController.update);
router.delete('/:id', tasksController.delete);

module.exports = router;
