const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const mongoose = require('mongoose');
require("../../models/entidades/usuario");
const Usuario = mongoose.model("usuarios");
router.get("/", (req, res) =>{
    res.render("usuarios/registro");
});

router.post("/registro", (req,res) => {

    bcrypt.genSalt(10, (erro, salt) => {
        Usuario.findOne({nomeUsuario: req.body.login}).then((usuario)=>{
            if(usuario){
                req.flash("error_msg", "Já existe uma conta com este e-mail em nosso sistema")
                res.redirect("/usuarios/registro")
            }else{
                const usuarioNovo = new Usuario({
                    "nome": req.body.nomeCompleto,
                    "email": req.body.email,
                    "sexo": req.body.sexo,
                    "dtaNascimento": req.body.dataNasc,
                    "nomeUsuario": req.body.login,
                    "senha": req.body.pass,
                    "peso": null,
                    "altura": null,
                });
                bcrypt.hash(usuarioNovo.senha, salt, (erro, hash) =>{
                    if(erro){
                        req.flash("error_msg", "Houve um erro durante o salvamento do usuario")
                        res.redirect("/")
                    }

                    usuarioNovo.senha = hash;
                    usuarioNovo.save().then(()=>{
                        req.flash("success_msg", "Usuario criado com sucesso!")
                        res.redirect("/")
                    }).catch((err) => {
                        req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente! " )
                        res.redirect("/")
                    });
                });

            }


        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
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

router.get("/logout", (req,res) => {
    req.logOut()
    req.flash("success_msg", "Deslogado com sucesso!")
    res.sendStatus(200);
})
module.exports = router