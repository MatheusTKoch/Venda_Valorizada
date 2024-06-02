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

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})