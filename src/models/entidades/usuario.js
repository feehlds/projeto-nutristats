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
//converte data de nascimento em idade;
Usuario.methods.getIdade = function(){


    var atual = new Date();
    var anoAtual =  atual.getFullYear();
    var diaAtual =  atual.getDay();
    var mesAtual =  atual.getMonth();
    var dataNasc= this.dtaNascimento.split("/");
    var ano = dataNasc[2];
    var mes = dataNasc[1];
    var dia = dataNasc[0];

    var idade =  anoAtual - ano;

    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        idade--;
    }
    return  idade;
}
//Calculo IMC
Usuario.methods.calcularIMC = function(){
    return  parseFloat((this.Peso / Math.pow(this.Altura, 2)).toFixed(2));
}
//Taxa metabólica basal
Usuario.methods.calcularTMB = function(){

    var somar, multPeso, multAltura,  multIdade;

    if(this.sexo =="M"){
        somar =66.5;
        multPeso = 13.75;
        multAltura = 5.003;
        multIdade = 6.755;
    }else{
        somar = 655.1
        multPeso = 9.563;
        multAltura = 1.850;
        multIdade = 4.676;
    }

    return parseFloat((somar + (multPeso * this.Peso) + (multAltura * this.Altura *100) - (multIdade * this.getIdade())).toFixed(2) );

}


mongoose.model('usuarios', Usuario);

