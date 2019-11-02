const MongoClient = require('mongodb').MongoClient;


if (process.env.DB_URL_MONGO == undefined){
    const uri ='mongodb://localhost:27017/nutristats';
    const client = new MongoClient(uri, (err,client)=> { 
        
        useUnifiedTopology: true
    });

    
    module.exports = client;
      
 }else{
    const uri =  process.env.DB_URL_MONGO;

    const client = new MongoClient(uri, (err,client)=> { 
    
        useUnifiedTopology: true
    });
    module.exports = client;
}



