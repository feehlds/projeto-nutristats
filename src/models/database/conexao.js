const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

module.exports = client;

///sequelize
// const Sequelize = require('../../../node_modules/sequelize');
// const sequelize = new Sequelize('teste', 'postgres' , '415263', {
//     host: 'localhost',
//     dialect: 'postgres',
  

//     pool:{
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
    
// });

// module.exports = {
//   Sequelize: Sequelize,
//   sequelize: sequelize
// };