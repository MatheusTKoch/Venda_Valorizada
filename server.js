/* eslint-disable no-undef */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});