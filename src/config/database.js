/* eslint-disable no-undef */
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASSWORD, {
    host: process.env.MARIADB_HOST,
    dialect: 'mariadb'
});

export default sequelize;
