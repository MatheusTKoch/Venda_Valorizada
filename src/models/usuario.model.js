/* eslint-disable no-undef */
const DataTypes  = require('sequelize');
const sequelize = require('../config/database.js');

const Usuario = sequelize.define('Usuario', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

export default Usuario;