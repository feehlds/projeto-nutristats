//import Usuario from '../src/models/entidades/usuario';
var usert = require('../src/models/entidades/usuario');
test('setar um nome', () => {
    

    var user = new usert.Usuario();
    var andre = "andre";
    user.setNome(andre);
    
     expect(andre).toBe(user.getNome());
  });