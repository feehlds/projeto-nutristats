if (process.env.DB_URL_MONGO == undefined){
    module.exports = {mongoURI: "mongodb://localhost:27017/nutristats"}  
 }else{
    module.exports = {mongoURI: process.env.DB_URL_MONGO}
}



