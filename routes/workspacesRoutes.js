const express = require('express');
const router = express.Router();
const workspacesController = require('../controllers/workspacesController');

router.post('/', workspacesController.create);
router.get('/', workspacesController.findAll);
router.get('/:id', workspacesController.findById);
router.put('/:id', workspacesController.update);
router.delete('/:id', workspacesController.delete);

module.exports = router;
