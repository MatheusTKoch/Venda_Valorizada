/* eslint-disable no-undef */
import { Sequelize } from "sequelize";

const dbName = String(import.meta.MARIADB_DATABASE);
const dbUser = String(import.meta.MARIADB_USER);
const dbPassword = String(import.meta.MARIADB_PASSWORD);
const dbHost = String(import.meta.MARIADB_HOST);

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mariadb',
    port: 3307
});

export default sequelize;
