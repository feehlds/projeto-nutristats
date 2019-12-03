
//converte data de nascimento em idade;
exports.getIdade = function (usuario) {
    if (usuario) {
        var atual = new Date();
        var anoAtual = atual.getFullYear();
        var diaAtual = atual.getDay();
        var mesAtual = atual.getMonth();
        var dataNasc = usuario.perfil.dataNasc.split("/");
        var ano = dataNasc[2];
        var mes = dataNasc[1];
        var dia = dataNasc[0];

        var idade = anoAtual - ano;

        if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
            idade--;
        }
        return idade;
    } else
        return null;
}
//Calculo IMC
exports.calcularIMC = function (usuario) {
    if (usuario.perfil.peso && usuario.perfil.altura) {
        return parseFloat((usuario.perfil.peso / Math.pow(usuario.perfil.altura, 2)).toFixed(2));
    } else
        return null;
}
//Taxa metabólica basal
exports.calcularTMB = function (usuario) {

    var somar, multPeso, multAltura, multIdade;
    if (usuario.perfil.sexo == "M") {
        somar = 66.5;
        multPeso = 13.75;
        multAltura = 5.003;
        multIdade = 6.755;
    } else {
        somar = 655.1
        multPeso = 9.563;
        multAltura = 1.850;
        multIdade = 4.676;
    }

    return parseFloat((somar + (multPeso * usuario.perfil.peso) + (multAltura * usuario.perfil.altura * 100) - (multIdade * this.getIdade(usuario))).toFixed(2));

}

exports.getInfo = function (usuario) {
    info = {
        idade: this.getIdade(usuario),
        imc: this.calcularIMC(usuario),
        tmb: this.calcularTMB(usuario),
    };
    return info;
}



