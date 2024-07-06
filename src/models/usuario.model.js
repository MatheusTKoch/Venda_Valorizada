/* eslint-disable no-undef */
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
// const DataTypes  = require('sequelize');
// const sequelize = require('../config/database.js');

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