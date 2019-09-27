const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

module.exports = client;

///sequelize
const Sequelize = require(__dirname, 'sequelize');
const sequelize = new Sequelize('database', 'username' , '1234', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};