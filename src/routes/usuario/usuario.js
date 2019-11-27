const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const mongoose = require('mongoose');
require("../../models/entidades/usuario");
const Usuario = mongoose.model("usuarios");
//REGISTRAR
router.post("/registro", (req,res, next) => {

    bcrypt.genSalt(10, (erro, salt) => {
        Usuario.findOne({nomeUsuario: req.body.login}).then((usuario)=>{
            if(usuario){
                req.flash("error_msg", "Já existe uma conta com nome de usuário em nosso sistema");
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
                        req.flash("error_msg", "Houve um erro durante o salvamento do usuario");
                        res.sendStatus(401);
                    }

                    usuarioNovo.senha = hash;
                    usuarioNovo.save().then(()=>{
                        req.flash("success_msg", "Usuario criado com sucesso!");
                        console.log('bateu cadastro')
                        res.redirect(307, '/usuario/login');
                    }).catch((err) => {
                        req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente! " );
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


router.post("/atualizar", (req,res, next) => {
    console.log(req)
            
    //verifica se o usuário ja esta cadastrado no sitema
    var nomeUsuario =  req.body.nomeUsuario;
    var id = req.body._id;
    Usuario.find().then((usuarioList)=>{           

        usuarioList.forEach (function (usuarioFind) { 

            if(usuarioFind.nomeUsuario === nomeUsuario &&  usuarioFind.id != id){
                req.flash("error_msg", "Já existe uma conta com este nomeUsuário em nosso sistema");
                res.status(400).send('Usuário já existe');
            }else{

                //Se não, realiza o update
                Usuario.findOne({_id: req.body._id}).then((usuario)=>{
                        usuario.nome = req.body.nome;
                        usuario.email = req.body.email;
                        usuario.nomeUsuario =  req.body.nomeUsuario;
                        usuario.senha =  usuario.senha;
                        usuario.perfil =  req.body.perfil;
                                
                        usuario.save().then(()=>{
                            req.flash("success_msg", "Usuario criado com sucesso!")
                            res.status(200).json('ok');

                        }).catch((err) => {
                            req.flash("error_msg", "Houve um erro interno");
                            res.status(404);
                        });
                }).catch((err)=>{
                    req.flash("error_msg", "Houve um erro ao atualizaro o usuário")
                    res.status(404);
                });
            }
        }); 
    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro interno ao editar o usuário");
        res.status(404);
    })
});




router.post("/login",(req,res,next)=>{
    passport.authenticate("local",{
        failureRedirect: "/erro",
        failureFlash: true
    })(req,res,next);
    console.log(req.locals.user)
    res.send(res.locals.user);
});

router.get("/logout", (req,res) => {
    req.logOut();
    req.flash("success_msg", "Deslogado com sucesso!");
    res.status(200).json('ok');
})
module.exports = router