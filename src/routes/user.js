/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const Usuario = require('../models/login.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            return res.status(400).json({ error: 'Email e senha sao obrigatorios' });
        }

        if (typeof senha !== 'string' || senha.trim() === '') {
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const newUser = new Usuario({ email, senha: hashedPassword });
        await newUser.save();
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ error: "Could not create user" });
    }
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await Usuario.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(400).json({ error: "Could not login user" });
    }
});

module.exports = router;

