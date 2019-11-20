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
    nomeUsuario:{
        type: String,
        require: true
    },
    perfil:{
        type: Object,
        require: false
    }


});

mongoose.model('usuarios', Usuario);

