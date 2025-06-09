console.log('>>> frontRoutes foi carregado!');

const express = require('express');
const router = express.Router();

router.get('/landing', (req, res) => {
  console.log('>>> Entrou na rota /landing');
  res.render('landing');
});

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/workspace', (req, res) => {
  res.render('workspace');
});

module.exports = router;
