/* eslint-disable no-undef */
import express from 'express';
import path from 'path';
import cors from 'cors';
import sequelize from './src/config/database.js';
import userRoutes from './src/routes/user.js';

const app = express();
const PORT = import.meta.PORT;

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