//import Usuario from '../src/models/entidades/usuario';
const mongoose = require('mongoose');
require("../src/models/entidades/usuario");

const controler = require('../src/models/entidades/usuarioControler');
test('Criar um usuario', () => {
    var usuarioInserir = {
        "nome": "andre",
        "email": "andre@andre.com",
        "sexo": "andre",
        "dtaNascimento": '16/01/2000',
        "nomeUsuario": "andre",
        "senha": "andre",
        "peso": 10,
        "altura": 20,

    }
    var Usuario = mongoose.model("usuarios");
    var usuario = new Usuario(usuarioInserir);
     expect(usuario.nome).toBe(usuarioInserir.nome);
     expect(usuario.email).toBe(usuarioInserir.email);
     expect(usuario.sexo).toBe(usuarioInserir.sexo);
     expect(usuario.dtaNascimento).toBe(usuarioInserir.dtaNascimento);
     expect(usuario.nomeUsuario).toBe(usuarioInserir.nomeUsuario);
     expect(usuario.senha).toBe(usuarioInserir.senha);
     expect(usuario.peso).toBe(usuarioInserir.peso);
     expect(usuario.altura).toBe(usuarioInserir.altura);
  });

test('calcular IMC', ()=>{
    var  peso = "80";
    var altura = "1.80";
    expect(controler.calcularIMC(peso, altura)).toBe(24.69);
});

test('calcular idade', ()=>{
    var dtaNascimento = "16/01/2000";

    expect(controler.getIdade(dtaNascimento)).toBe(19);
});


test('calcular Taxa metabólica basal', ()=>{
      //idade = 32 anos 
    var usuarioInserirM = {
        "nome": "andre",
        "email": "andre@andre.com",
        "sexo": "M",
        "dtaNascimento": "16/01/1987",
        "nomeUsuario": "andre",
        "senha": "andre",
        "peso": 65,
        "altura": 1.70,

    }

    //idade = 30 anos
    var usuarioInserirF = {
        "nome": "andre",
        "email": "andre@andre.com",
        "sexo": "F",
        "dtaNascimento": "16/01/1989",
        "nomeUsuario": "andre",
        "senha": "andre",
        "peso": 70,
        "altura": 1.65,

    }

    //Homem
    expect(controler.calcularTMB(usuarioInserirM)).toBe(1594.60);
    //Mulher
    expect(controler.calcularTMB(usuarioInserirF)).toBe(1489.48);
});