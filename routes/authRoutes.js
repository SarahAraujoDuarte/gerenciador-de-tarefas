// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /login e cadastro
router.post('/login', authController.login);

router.post('/cadastro', authController.register);

//logout
router.get('/logout', authController.logout);

module.exports = router;
