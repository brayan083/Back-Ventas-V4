const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('Sumate test', 'root', 'Dragones05@',
{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = {dbConnection};