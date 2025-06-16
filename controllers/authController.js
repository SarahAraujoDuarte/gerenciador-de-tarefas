// controllers/auth.controller.js
const Usuarios = require('../models/userModel');
const bcrypt = require('bcrypt');

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await Usuarios.findByEmail(email);

      if (!user || !(await bcrypt.compare(password, user.senha))) {
        return res.status(401).render('login', { error: 'E-mail ou senha inválidos' });
      }

      req.session.usuarioId = user.id;

      return res.redirect('/home');
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      res.status(500).send('Erro interno ao realizar login');
    }
  },

  async register(req, res) {
    try {
      const { nome, sobrenome, email, password } = req.body;

      const nomeCompleto = `${nome} ${sobrenome}`;
      const senhaCriptografada = await bcrypt.hash(password, 10);

      const novoUsuario = await Usuarios.create({
        nome: nomeCompleto,
        profissao: 'Usuário',
        email,
        senha: senhaCriptografada,
        foto_perfil: null
      });

      req.session.userId = novoUsuario.id;

      return res.redirect('/home');
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
      res.status(500).send('Erro interno ao realizar cadastro');
    }
  },

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Erro ao encerrar a sessão:', err);
        return res.status(500).send('Erro ao fazer logout');
      }
      res.redirect('/login');
    });
  }
};

module.exports = authController;
