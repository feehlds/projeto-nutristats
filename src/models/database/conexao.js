/*const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
*/
//module.exports = client;

///sequelize
const Sequelize = require('../../../node_modules/sequelize');
//const sequelize =null;
/*const sequelize = new Sequelize('teste', 'postgres' , '415263', {
    host: 'localhost',
    dialect: 'postgres',
  

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
});*/


var strConexao;
//strConexao="dbname=d34imgphjhpkrv host=ec2-23-23-182-18.compute-1.amazonaws.com port=5432 user=xdgwlloffjytim password=c159562ff141e013ed13fdb422feee78eee9de55df0e3933730490f7c4fe6e53 ssl=true";
const sequelize = new Sequelize("postgres://xdgwlloffjytim:c159562ff141e013ed13fdb422feee78eee9de55df0e3933730490f7c4fe6e53@ec2-23-23-182-18.compute-1.amazonaws.com:5432/d34imgphjhpkrv ", {
    dialectOptions: {
        ssl: true
    },
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};