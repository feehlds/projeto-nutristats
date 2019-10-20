//import Usuario from '../src/models/entidades/usuario';
var usert = require('../src/models/entidades/usuario');
test('setar um nome', () => {
    

    var user = new usert.Usuario();
    var andre = "andre";
    user.setNome(andre);
    
     expect(user.getNome()).toBe(andre);
  });

test('calcular IMC', ()=>{
    var user = new usert.Usuario();
    var altura = 1.80;
    var peso = 80;

    user.setAltura(altura);
    user.setPeso(peso);

    var result = user.calcularIMC();
    
    expect(result).toBe(24.69);

});

test('calcular idade', ()=>{
    var user = new usert.Usuario();
    user.setDataNascimento("16/01/2000");
    expect(user.getIdade()).toBe(19);
});

test('calcular Taxa metabólica basal', ()=>{
    var user = new usert.Usuario();
    //idade = 32 anos
    user.setDataNascimento("16/01/1987");
    user.setSexo("M");
    var altura = 1.70;
    var peso = 65;
    user.setAltura(altura);
    user.setPeso(peso);


    var userF = new usert.Usuario();
    //idade = 30 anos
    userF.setDataNascimento("16/01/1989");
    userF.setSexo("F");
    var alturaF = 1.65;
    var pesoF = 70;
    userF.setAltura(alturaF);
    userF.setPeso(pesoF);

    //Homem
    expect(user.calcularTMB()).toBe(1594.60);

    //Mulher
    expect(userF.calcularTMB()).toBe(1489.48);
});