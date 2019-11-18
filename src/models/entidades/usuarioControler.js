
//converte data de nascimento em idade;
    exports.getIdade = function (dtaNascimento){


        var atual = new Date();
        var anoAtual =  atual.getFullYear();
        var diaAtual =  atual.getDay();
        var mesAtual =  atual.getMonth();
        var dataNasc= dtaNascimento.split("/");
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
    exports.calcularIMC = function(peso, altura){
        return  parseFloat((peso / Math.pow(altura, 2)).toFixed(2));
    }
//Taxa metabólica basal
    exports.calcularTMB = function(usuario){

        var somar, multPeso, multAltura,  multIdade;

        if(usuario.sexo =="M"){
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

        return parseFloat((somar + (multPeso * usuario.peso) + (multAltura * usuario.altura *100) - (multIdade * this.getIdade(usuario.dtaNascimento))).toFixed(2) );

    }

