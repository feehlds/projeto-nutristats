const MongoClient = require('mongodb').MongoClient;

const uri = process.env.DB_URL_MONGO;

const client = new MongoClient(uri, { 
    useNewUrlParser: true 
});

module.exports = clinet;