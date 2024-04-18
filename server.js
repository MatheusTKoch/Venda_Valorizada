/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const mongodb = require('mongodb')
const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL 
app.use(mongodb)

const MongoClient = mongodb.MongoClient;
//const dbName = 'vendaValorizada';

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    require: true
  }
});

const loginModel = mongoose.model('login', loginSchema);

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }
  console.log('Connected successfully to the database')
});

app.use(express.static(path.join(__dirname, 'dist')));

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