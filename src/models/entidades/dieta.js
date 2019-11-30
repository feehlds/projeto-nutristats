const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Dieta = Schema({
    descricao:{
        type: Object,
        require: true
    },
    cafeManha: {
        type: Object,
        require: true
    },  
    almoco: {
        type: Object,
        require: true
    },
    cafeTarde:  {
        type: Object,
        require: true
    },
    janta: {
        type: Object,
        require: true
    },
    ativo:{
        type:Boolean,
        require:true,
    },
    Usuario: {
        type: String,
        require: true
    }
});

mongoose.model('dietas', Dieta);