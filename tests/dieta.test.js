const mongoose = require('mongoose');
require("../src/models/entidades/dieta");
const controler = require('../src/models/controler/dietaControler');
test('Criar uma dieta', () => {
    var dietaInserir = {
        "descricao": "Dieta para ferias",
        "cafeManha": {
            "Pão": 2,
            "Café": "200ml",
            "Leite": "200ml",
            "Maça": 1
        },
        "almoco": {
            "Arroz": 2,
            "Feijão": "200g",
            "Carne": "1 pedaço",
            "Salada": "tomate arroz"
        },
        "cafeTarde": {
            "Fruta": 1,
            "Suco natural": "500ml"
        },
        "janta": {
            "Arroz": "300g",
            "Ovo": 2
        },
        "ativo": true,
        "Usuario": "203040"
    }
    var Dieta = mongoose.model("dietas");
    var dieta = new Dieta(dietaInserir);
    expect(dietaInserir ==null).toBe(false);
    expect(dieta.descricao).toBe(dietaInserir.descricao);
    expect(dieta.cafeManha).toBe(dietaInserir.cafeManha);
    expect(dieta.almoco).toBe(dietaInserir.almoco);
    expect(dieta.cafeTarde).toBe(dietaInserir.cafeTarde);
    expect(dieta.janta).toBe(dietaInserir.janta);
    expect(dieta.ativo).toBe(dietaInserir.ativo);
    expect(dieta.Usuario).toBe(dietaInserir.Usuario);
});

test('Pesquisa objeto de uma dieta', () => {
    var dieta = {
        "descricao": "Dieta para ferias",
        "cafeManha": {
            "Pão": 2,
            "Café": "200ml",
            "Leite": "200ml",
            "Maça": 1
        },
        "almoco": {
            "Arroz, integral, cozido": 200,
            "Feijão": 100,
            "Carne, bovina, fígado, grelhado": 100,
            "Tomate, com semente, cru": 150
        },
        "cafeTarde": {
            "Fruta": 1,
            "Suco natural": "500ml"
        },
        "janta": {
            "Arroz": "300g",
            "Ovo": 2
        },
        "ativo": true,
        "Usuario": "203040"
    }
    listaFom =[]
    listaFom.push(
        {
            item1: "arroz",
            gramas1: 100,
            item2: "fejao",
            gramas2: 200,
            item3: "leite",
            grama3: 50
        }
    )
    var list = [];
    var stringJson;
    var stringItem;
    for (let index = 1; index <= listaFom.length; index++) {
        stringItem = '{"item'+index+'":'+'listaForm.item'+index+'}';
        console.log(stringItem);
        stringJson = JSON.parse(stringItem);
        console.log(stringJson);
        
    }
   //list.push(dieta.almoco.)
   // controler.ListarItemDaDieta(dieta.almoco);


});
