const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const mongoose = require('mongoose');
require("../../src/models/entidades/usuario");
const Usuario = mongoose.model("usuarios");
//REGISTRAR

router.get("/registro", (req, res) =>{
    res.render("usuarios/registro")
})

router.post("/registro", (req,res) => {

    bcrypt.genSalt(10, (erro, salt) => {
        Usuario.findOne({nomeUsuario: req.body.login}).then((usuario)=>{
            console.log("entrou aqui");
            if(usuario){
                req.flash("error_msg", "Já existe uma conta com nome de usuário em nosso sistema");
                res.redirect("/");
            }else{
                const usuarioNovo = new Usuario({
                    "nome": req.body.nomeCompleto,
                    "email": req.body.email,
                    "nomeUsuario": req.body.login,
                    "senha": req.body.pass,
                    "perfil": {
                                "DataNascimento": req.body.dataNasc,
                               }
                });
                bcrypt.hash(usuarioNovo.senha, salt, (erro, hash) =>{
                    if(erro){
                        req.flash("error_msg", "Houve um erro durante o salvamento do usuario");
                        res.redirect("/");
                    }

                    usuarioNovo.senha = hash;
                    usuarioNovo.save().then(()=>{
                        req.flash("success_msg", "Usuario criado com sucesso!");
                        res.redirect("/");
                    }).catch((err) => {
                        req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente! " );
                        res.redirect("/");
                    });
                });
            }
        }).catch((err) => {
            console.log("entrou aqui");
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/");
        });
        
        
    })
    
});

router.get("/atualizar", (req, res) =>{
    res.render("usuarios/atualizar")
})
router.post("/atualizar", (req,res, next) => {
    
    //verifica se o usuário ja esta cadastrado no sitema
    var nomeUsuario =  req.body.nomeUsuario;
    console.log(req.user._id);
    var id = req.user._id;
    Usuario.find().then((usuarioList)=>{           

        usuarioList.forEach (function (usuarioFind) { 

            if(usuarioFind.nomeUsuario === nomeUsuario &&  usuarioFind._id != id){
                console.log(usuarioFind._id)
                console.log(id)
                console.log(usuarioFind.nomeUsuario);
                console.log(nomeUsuario)
                req.flash("error_msg", "Já existe uma conta com este nomeUsuário em nosso sistema");
                res.redirect("/");
            }else{

                //Se não, realiza o update
                Usuario.findOne({_id: req.user._id}).then((usuario)=>{
                        usuario.nome = req.body.nome;
                        usuario.email = req.body.email;
                        usuario.nomeUsuario =  req.body.nomeUsuario;
                        usuario.senha =  usuario.senha;
                        usuario.perfil = {
                                            "DataNascimento":req.body.dataNasc,
                                         } 
                                
                        usuario.save().then(()=>{
                            req.flash("success_msg", "Usuario criado com sucesso!")
                            res.redirect("/");

                        }).catch((err) => {
                            req.flash("error_msg", "Houve um erro interno");
                            res.redirect("/");
                        });
                }).catch((err)=>{
                    req.flash("error_msg", "Houve um erro ao atualizaro o usuário")
                    res.redirect("/");
                });
            }
        }); 
    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro interno ao editar o usuário");
        res.redirect("/");
    })
});

router.get("/login", (req,res) => {
    res.render("usuarios/login");
})

router.post("/login",(req,res,next)=>{
    passport.authenticate("local",{
        successRedirect: "/",
        failureRedirect: "/",
        failureFlash: true
    })(req,res,next);
    
});

router.get("/logout", (req,res) => {
    req.logOut();
    res.redirect("/");
})
module.exports = router