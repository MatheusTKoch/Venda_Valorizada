/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const mongodb = require('mongodb')
const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL 
app.use(mongodb)

const MongoClient = mongodb.MongoClient;
const dbName = 'vendaValorizada';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }
  console.log('Connected successfully to the database')
});

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