const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const mongoose = require('mongoose');
require("../../src/models/entidades/usuario");
const Usuario = mongoose.model("usuarios");
//REGISTRAR

router.get("/registro", (req, res) => {
    res.render("usuarios/registro")
})

router.post("/registro", (req, res) => {
    bcrypt.genSalt(10, (erro, salt) => {
        Usuario.findOne({ nomeUsuario: req.body.login }).then((usuario) => {
            if (usuario) {
                req.flash("error_msg", "Já existe uma conta com nome de usuário em nosso sistema");
                res.redirect("/");
            } else {
                const usuarioNovo = new Usuario({
                    "nome": req.body.nomeCompleto,
                    "email": req.body.email,
                    "nomeUsuario": req.body.login,
                    "senha": req.body.pass,
                    "perfil": {
                        "DataNascimento": req.body.dataNasc,
                    }
                });
                bcrypt.hash(usuarioNovo.senha, salt, (erro, hash) => {
                    if (erro) {
                        req.flash("error_msg", "Houve um erro durante o salvamento do usuario");
                        res.redirect("/");
                    }

                    usuarioNovo.senha = hash;
                    usuarioNovo.save().then(() => {
                        req.flash("success_msg", "Usuario criado com sucesso!");
                        res.redirect(307, "/usuarios/login");
                        
                    }).catch((err) => {
                        req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente! ");
                        res.redirect("/");
                    });
                });
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/");
        });


    })

});

router.post("/atualizar", (req, res) => {
    //verifica se o usuário ja esta cadastrado no sitema
    let nomeUsuario = req.body.nomeUsuario;
    let id = req.body._id;

    Usuario.findOne({ nomeUsuario: nomeUsuario }).then((usuario) => {
        if (!usuario || usuario.id === id) {
            usuario.nome = req.body.nome;
            usuario.email = req.body.email;
            usuario.nomeUsuario = req.body.nomeUsuario;
            usuario.senha = usuario.senha;
            usuario.perfil = req.body.perfil;

            usuario.save().then(() => {
                req.flash("success_msg", "Usuario criado com sucesso!")
                res.redirect("/");

            }).catch((err) => {
                req.flash("error_msg", "Houve um erro interno");
                res.redirect("/");
            });
        } else {
            req.flash("error_msg", "Já existe uma conta com este nome de Usuário em nosso sistema");
            res.redirect("/");
        }

    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno ao editar o usuário");
        res.redirect("/");
    })
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) { return next(err); }

        if (!user) { return res.status(200).send(info); }

        req.logIn(user, function (err) {
            res.status(200).json({status: "Success", redirect: '/usuarios/' + user.nomeUsuario});        
        });
    })(req, res, next);

});

router.get('/:nomeUsuario', (req, res, next) =>{
    if(req.user && req.user.nomeUsuario == req.params.nomeUsuario)
        res.render("usuario")
    else
        res.redirect('/')
})

module.exports = router