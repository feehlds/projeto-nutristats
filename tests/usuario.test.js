//import Usuario from '../src/models/entidades/usuario';
const mongoose = require('mongoose');
require("../src/models/entidades/usuario");

const controler = require('../src/models/entidades/usuarioControler');
test('Criar um usuario', () => {
    var usuarioInserir = {
        "nome": "andre",
        "email": "andre@andre.com",
        "nomeUsuario": "andre",
        "senha": "andre",
        "perfil": {
            "peso": 65,
            "altura": 1.70,
            "sexo": "M",
            "dataNasc": "16/01/1987"
        }
    }
    var Usuario = mongoose.model("usuarios");
    var usuario = new Usuario(usuarioInserir);
    expect(usuario.nome).toBe(usuarioInserir.nome);
    expect(usuario.email).toBe(usuarioInserir.email);
    expect(usuario.perfil.sexo).toBe(usuarioInserir.perfil.sexo);
    expect(usuario.perfil.dataNasc).toBe(usuarioInserir.perfil.dataNasc);
    expect(usuario.nomeUsuario).toBe(usuarioInserir.nomeUsuario);
    expect(usuario.senha).toBe(usuarioInserir.senha);
    expect(usuario.perfil.peso).toBe(usuarioInserir.perfil.peso);
    expect(usuario.perfil.altura).toBe(usuarioInserir.perfil.altura);
});

test('calcular IMC', () => {
    var user = {
        "nome": "andre",
        "email": "andre@andre.com",
        "nomeUsuario": "andre",
        "senha": "andre",
        "perfil": {
            "peso": 80,
            "altura": 1.80,
            "sexo": "M",
            "dataNasc": "16/01/1987"
        }
    }
    expect(controler.calcularIMC(user)).toBe(24.69);
});

test('calcular idade', () => {
    var user = {
        "nome": "andre",
        "email": "andre@andre.com",
        "nomeUsuario": "andre",
        "senha": "andre",
        "perfil": {
            "peso": 80,
            "altura": 1.80,
            "sexo": "M",
            "dataNasc": "16/01/2000"
        }
    }
    expect(controler.getIdade(user)).toBe(19);
});


test('calcular Taxa metabólica basal', () => {
    //idade = 32 anos 
    var usuarioInserirM = {
        "nome": "andre",
        "email": "andre@andre.com",
        "nomeUsuario": "andre",
        "senha": "andre",
        "perfil": {
            "peso": 65,
            "altura": 1.70,
            "sexo": "M",
            "dataNasc": "16/01/1987"
        }
    }

    //idade = 30 anos
    var usuarioInserirF = {
        "nome": "andre",
        "email": "andre@andre.com",
        "nomeUsuario": "andre",
        "senha": "andre",
        "perfil": {
            "sexo": "F",
            "peso": 70,
            "altura": 1.65,
            "dataNasc": "16/01/1989"
        }

    }

    //Homem
    expect(controler.calcularTMB(usuarioInserirM)).toBe(1594.60);
    //Mulher
    expect(controler.calcularTMB(usuarioInserirF)).toBe(1489.48);
});