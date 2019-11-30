if (process.env.DB_URL_MONGO == undefined){
    module.exports = {mongoURI: "mongodb+srv://nutriadmin:nutri@datapass123@cluster0-ty4wp.mongodb.net/nutristats?retryWrites=true&w=majority"}  
 }else{
    module.exports = {mongoURI: process.env.DB_URL_MONGO}
}



