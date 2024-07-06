/* eslint-disable no-undef */
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(import.meta.MARIADB_DATABASE, import.meta.MARIADB_USER, import.meta.MARIADB_PASSWORD, {
    host: import.meta.MARIADB_HOST,
    dialect: 'mariadb'
});

export default sequelize;
