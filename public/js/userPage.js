//Usuario
var nomeUsuario;
var pass;
var email;
var nome;
var userId;
//Perfil
var altura;
var peso;
var sexo;
var alimentacao;
var dataNasc;
var imc;
var tbm;

//Mudar conteúdo da página

function changeContent(id) {
    if(document.getElementById("nutrientes").style.display == "block"){
        document.getElementById("nutrientes").style.display = 'none';
        document.getElementById(id).style.display = 'block'
    }
    else if(document.getElementById("profileTab").style.display == "block"){
        document.getElementById("profileTab").style.display = 'none';
        document.getElementById(id).style.display = 'block'
    }
    else if(document.getElementById("dietas").style.display == "block"){
        document.getElementById("dietas").style.display = 'none';
        document.getElementById(id).style.display = 'block'
    }
  
}

//Event listener para fazer o post
$(function () {
    $('#infoConta').on('submit', function (e) {
        e.preventDefault();
        var data = returnUser();
        $.post('/usuarios/atualizar', data);
    });
});

$(function () {
    $('#savePerfil').on('submit', function (e) {
        e.preventDefault();
        var data = returnUser();
        $.post('/usuarios/atualizar', data);
    });
});

//Event listener para alterar username
document.getElementById("inputUsername").addEventListener("change", function () {
    nomeUsuario = this.value
});

//Event listener para alterar email
document.getElementById("inputEmail").addEventListener("change", function () {
    email = this.value
});

//Event listener para alterar nome
document.getElementById("inputName").addEventListener("change", function () {
    nome = this.value
});

//Event listener para alterar sexo
document.getElementById("inputSexo").addEventListener("change", function () {
    sexo = this.value
    document.getElementById("inputSexo").value = sexo;

});

//Event listener para alterar altura
document.getElementById("inputAltura").addEventListener("change", function () {
    this.value = parseFloat(this.value).toFixed(2);
    altura = this.value
});

//Event listener para alterar peso
document.getElementById("inputPeso").addEventListener("change", function () {
    this.value = parseFloat(this.value).toFixed(2);
    peso = this.value
});

//Event listener para alterar Alimentação
document.getElementById("inputAlimentacao").addEventListener("change", function () {
    alimentacao = this.value
});

//Event listener para alterar Data Nascimento
document.getElementById("inputDataNasc").addEventListener("change", function () {
    alimentacao = this.value
});


//Preencher tela de usuario
function preencherInfo(update) {
    //Data Binding
    nomeUsuario = document.getElementById("inputUsername").value;
    email = document.getElementById("inputEmail").value;
    nome = document.getElementById("inputName").value;
    //Perfil
    altura = document.getElementById("inputAltura").value;
    peso = document.getElementById("inputPeso").value;
    
    if(update)
        sexo = document.getElementById("inputSexo").value
    else{
        sexo = document.getElementById("sexoUser").value;
        document.getElementById("inputSexo").value = sexo;
    }
    
    if(alimentacao = document.getElementById("inputAlimentacao").value){
        alimentacao = document.getElementById("inputAlimentacao").value;
    }   else{
        alimentacao = document.getElementById("userAlimentacao").value;
        document.getElementById("inputAlimentacao").value = alimentacao
    }
    dataNasc = document.getElementById("inputDataNasc").value;
}

function returnUser() {
    preencherInfo(true)
    let user = {}
    user._id = userId;
    user.nome = nome;
    user.email = email;
    user.nomeUsuario = nomeUsuario;
    let perfil = {};
    perfil.sexo = sexo;
    perfil.dataNasc = dataNasc;
    perfil.alimentacao = alimentacao;
    perfil.altura = altura;
    perfil.peso = peso;
    user.perfil = perfil
    return user;
}

function saveId(id) {
    userId = id;
}
preencherInfo()