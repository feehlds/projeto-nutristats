const localStraty = require("passport-local").Strategy
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const controler = require('../src/models/entidades/usuarioControler');
//model de usuário
require("../src/models/entidades/usuario");
const Usuario = mongoose.model("usuarios");

module.exports = function(passport){
    passport.use(new localStraty({usernameField: 'login', passwordField: 'pass'}, (userName,senha,done) =>{
        Usuario.findOne({nomeUsuario: userName}).then((usuario) =>{
            if(!usuario){
                return done(null,false,{message: "Esta conta não existe"});
            }

            bcrypt.compare(senha, usuario.senha, (erro, batem) =>{
                if(batem){
                    delete usuario.senha['senha'];  
                   // usuario["idade"] = controler.getIdade(usuario.dtaNascimento)
                    return done(null, usuario)
                }else{
                    return done(null,false,{message: "Senha incorreta"});
                }
            });
             
        });  
    }));
    passport.serializeUser((usuario,done)=>{
        done(null, usuario.id);
    });
    passport.deserializeUser((id,done) =>{
        Usuario.findById(id, (err, usuario) =>{
            done(err, usuario);
        });
    });

}