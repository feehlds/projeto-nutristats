const mongoose = require('mongoose');
require("../src/models/entidades/dieta");

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
