require('dotenv').config();

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    databaseName: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT
};

module.exports = config;