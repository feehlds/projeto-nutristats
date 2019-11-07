const localStraty = require("passport-local").Strategy
const bcrypt = require("bcryptjs")

// class usuario
const usuario = require('../src/models/persistencia/usuario');
var usuarioP = new usuario.Usuario();

module.exports = function(passport){
    passport.use(new localStraty({usernameField: 'email', passwordField: 'senha'}, (email,senha,done) =>{

        usuarioP.buscarPorId({email: email}).then((usuario)=>{
            if(!usuario){
                return done(null,false,{message: "Esta conta não existe"})
            };
        });
    }));

}