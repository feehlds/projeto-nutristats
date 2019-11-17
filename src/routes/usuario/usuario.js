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
    usuarioNovo.setNome(req.body.nomeCompleto);
    usuarioNovo.setDataNascimento(req.body.dataNasc);
    usuarioNovo.setEmail(req.body.email);
    usuarioNovo.setSexo(req.body.sexo);
    usuarioNovo.setNomeUsuario(req.body.login);
    usuarioNovo.setSenha(req.body.pass);

    bcrypt.genSalt(10, (erro, salt) => {
        bcrypt.hash(usuarioNovo.getSenha(), salt, (erro, hash) =>{
            if(erro){
                req.flash("error_msg", "Houve um erro durante o salvamento do usuario")
                console.log("DEU ERRO", erro);
            }
            usuarioNovo.setSenha(hash);
            try {
                up.inserir(usuarioNovo);
                res.status(200).redirect("/");
            } catch (error) {
                console.log("Deu error ao salvar",error);   
            }
        });
    });
    
});
router.post("/login",(req,res,next)=>{
    passport.authenticate("local",{
        successRedirect: "/",
        failureRedirect: "/erro",
        failureFlash: true
    })(req,res,next);
});

module.exports = router