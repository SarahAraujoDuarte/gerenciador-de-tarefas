const express = require('express');
const router = express.Router();
const columnsController = require('../controllers/columnsController');

router.post('/', columnsController.create);
router.get('/', columnsController.findAll);
router.get('/:id', columnsController.findById);
router.put('/:id', columnsController.update);
router.delete('/:id', columnsController.delete);

module.exports = router;
