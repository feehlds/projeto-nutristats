const express = require('express');
const router = express.Router();
const usuario = require("../../models/entidades/usuario");
const UsuarioPers = require('../../models/persistencia/usuario');
const bcrypt = require("bcryptjs");
const passport = require("passport");

// router.get("/registro", (req, res) =>{
//     res.render("usuarios/registro");
// });

router.post("/registro", (req,res) => {
    var up = new UsuarioPers.Usuario();
    console.log("entoru aqui")
    var usuarioNovo = new usuario.Usuario();
    console.log("AAAAAAAAAA",req.body);
    usuarioNovo.setNomeUsuario(req.body.nomeUsuario);
    usuarioNovo.setSenha(req.body.senhaUsuario);
    console.log(usuarioNovo.getNomeUsuario());
    console.log(usuarioNovo.getSenha());
    // bcrypt.genSalt(10, (erro, salt) => {
    //     bcrypt.hash(usuarioNovo.getSenha(), salt, (erro, hash) =>{
    //         if(erro){
    //            // req.flash("error_msg", "Houve um erro durante o salvamento do usuario")
    //             console.log("DEU ERRO", erro);
    //         }

    //         usuarioNovo.setSenha(hash);
    //         up.inserir(usuarioNovo).then(()=>{
    //             res.redirect('/');
    //         }).catch((err)=>{
    //             console.log(err);
    //         });
           
    //     });
    // });
    
});

module.exports = router