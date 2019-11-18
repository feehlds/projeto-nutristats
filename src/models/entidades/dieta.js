const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Dieta = Schema({
    cafeManha: {
        type: String,
        require: true
    },  
    almoco: {
        type: String,
        require: true
    },
    cafeTarde:  {
        type: String,
        require: true
    },
    janta: {
        type: String,
        require: true
    },
    Usuario: {
        type: String,
        require: true
    }
});

mongoose.model('dietas', Dieta);