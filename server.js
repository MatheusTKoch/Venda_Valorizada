/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./src/config/database.js');
const userRoutes = require('./src/routes/user.js');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});