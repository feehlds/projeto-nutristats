const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Usuario = Schema({
    nome: {
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    sexo:{
        type: String,
        require: true
    },
    dtaNascimento:{
        type: String,
        require: true
    },
    nomeUsuario:{
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true
    },
    peso:{
        type: Number,
        require: false
    },
    altura:{
        type: Number,
        require: false
    }


});

mongoose.model('usuarios', Usuario);

