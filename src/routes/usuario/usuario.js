const express = require('express');
const router = express.Router();
const usuario = require("../../models/entidades/usuario");
const UsuarioPers = require('../../models/persistencia/usuario');
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/", (req, res) =>{
    res.render("usuarios/registro");
});

router.post("/registro", (req,res) => {
    var up = new UsuarioPers.Usuario();
    var usuarioNovo = new usuario.Usuario();
 
    usuarioNovo.setNome(req.body.nomeUser);
    usuarioNovo.setDataNascimento(req.body.dataNasc);
    usuarioNovo.setEmail(req.body.email);
    //usuarioNovo.setPeso(1.2);
   // usuarioNovo.setAltura(12552);
    usuarioNovo.setSexo(req.body.sexo);
    usuarioNovo.setNomeUsuario(req.body.username);

    usuarioNovo.setSenha(req.body.senha);



    console.log(usuarioNovo);
    bcrypt.genSalt(10, (erro, salt) => {
        bcrypt.hash(usuarioNovo.getSenha(), salt, (erro, hash) =>{
            if(erro){
               // req.flash("error_msg", "Houve um erro durante o salvamento do usuario")
                console.log("DEU ERRO", erro);
            }
            usuarioNovo.setSenha(hash);
            console.log("Senha: ",usuarioNovo.getSenha());
            
            // up.inserir(usuarioNovo).then(()=>{
            //     res.redirect('/');
            // }).catch((err)=>{
            //     console.log(err);
            // });
           
        });
    });
    
});

module.exports = router