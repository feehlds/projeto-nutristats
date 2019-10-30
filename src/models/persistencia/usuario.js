const mongo = require('../database/conexaoMongo');
var usert = require('../entidades/usuario');
const assert = require('assert');

class usuarioMongo{

    inserir(usuario){

        var usuarioInserir = {

            "nome": usuario.getNome(),
            "email": usuario.getEmail(),
            "sexo": usuario.getDataNascimento(),
            "nomeUsuario": usuario.getNomeUsuario(),
            "senha": usuario.getSenha(),
            "peso": usuario.getPeso(),
            "altura": usuario.getAltura(),

        }
        
        mongo.connect((err)=>{
            assert.equal(null, err);
            const tbUsuario = mongo.db("nutristats");

            tbUsuario.collection('usuario').insertOne({a:usuarioInserir},(erro,r)=>{
                mongo.close();
            });
        });

        
    }

}
module.exports = {Usuario: usuarioMongo};