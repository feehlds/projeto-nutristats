const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const mongoose = require('mongoose');
require("../../models/entidades/usuario");
const Usuario = mongoose.model("usuarios");

router.post("/registro", (req,res, next) => {

    bcrypt.genSalt(10, (erro, salt) => {
        Usuario.findOne({nomeUsuario: req.body.login}).then((usuario)=>{
            if(usuario){
                req.flash("error_msg", "Já existe uma conta com este e-mail em nosso sistema")
                res.status(400).send('Usuário já existe');
            }else{
                const usuarioNovo = new Usuario({
                    "nome": req.body.nomeCompleto,
                    "email": req.body.email,
                    "nomeUsuario": req.body.login,
                    "senha": req.body.pass,
                    "perfil": req.body.perfil
                });
                bcrypt.hash(usuarioNovo.senha, salt, (erro, hash) =>{
                    if(erro){
                        req.flash("error_msg", "Houve um erro durante o salvamento do usuario")
                        res.sendStatus(401);
                    }

                    usuarioNovo.senha = hash;
                    usuarioNovo.save().then(()=>{
                        req.flash("success_msg", "Usuario criado com sucesso!")
                        console.log('bateu cadastro')
                        res.redirect(307, '/usuario/login');
                    }).catch((err) => {
                        req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente! " )
                        res.status(404);
                    });
                });
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/");
        });
    });
    
});
router.post("/login",(req,res,next)=>{
    passport.authenticate("local",{
        failureRedirect: "/erro",
        failureFlash: true
    })(req,res,next);
});

router.get("/logout", (req,res) => {
    req.logOut();
    req.flash("success_msg", "Deslogado com sucesso!");
    res.status(200).json('ok');
})
module.exports = router