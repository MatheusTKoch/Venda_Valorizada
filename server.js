/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

app.use(express.static(path.join(__dirname, '/index.html')));

app.route('/')
.get(function(req, res) {
  res.json('teste');
})
.post(function(req, res) {
  const { email, senha } = req.body;
  const newLogin = new loginModel({ email, senha });

  newLogin.save((err, savedUser) => {
    if (err) {
      console.error("Error creating user:", err);
      return res.status(400).json({ error: "Could not create user" });
    }
    res.json({ email: savedUser.email, senha: savedUser.senha });
  });
});

app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})