const router = require('express').Router();
let usuario = require('../models/login.model');

app.route('/')
.get(function(req, res) {
  res.json('teste');
})
.post(function(req, res) {
  const { email, senha } = req.body;
  const newLogin = new usuarioModel({ email, senha });

  newLogin.save((err, savedUser) => {
    if (err) {
      console.error("Error creating user:", err);
      return res.status(400).json({ error: "Could not create user" });
    }
    res.json({ email: savedUser.email, senha: savedUser.senha });
  });
});