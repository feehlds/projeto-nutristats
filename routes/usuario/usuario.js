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
                        "sexo": req.body.sexo,
                        "dataNasc": req.body.dataNasc,
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
            if (!usuario) {
                Usuario.findOne({ _id: id }).then((usuario) => {
                    usuario.nome = req.body.nome;
                    usuario.email = req.body.email;
                    usuario.nomeUsuario = req.body.nomeUsuario;
                    usuario.perfil = req.body.perfil

                    usuario.save().then(() => {
                        req.flash("success_msg", "Usuario atualizado com sucesso!")
                        res.status(200).json({ message: 'Atualizado!' });

                    }).catch((err) => {
                        req.flash("error_msg", "Houve um erro interno");
                        console.log(err)
                        res.status(500).json({ message: 'Houve um erro interno!' });
                    });
                })
            } else {
                usuario.nome = req.body.nome;
                usuario.email = req.body.email;
                usuario.nomeUsuario = req.body.nomeUsuario;
                usuario.perfil = req.body.perfil;

                usuario.save().then(() => {
                    req.flash("success_msg", "Usuario atualizado com sucesso!")
                    res.status(200).json({ message: 'Atualizado!' });

                }).catch((err) => {
                    req.flash("error_msg", "Houve um erro interno");
                    console.log(err)
                    res.status(500).json({ message: 'Houve um erro interno!' });
                });
            }
        } else {
            req.flash("error_msg", "Já existe uma conta com este nome de Usuário em nosso sistema");
            res.status(400).json({ message: 'Nome de usuário já existe' });
        }

    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno ao editar o usuário");
        res.status(500).json({ message: 'Houve um erro interno ao atualizar!' });
        console.log(err)
    })
});

router.post("/atualizarSenha", (req, res) => {
    Usuario.findOne({ _id: req.body.id }).then((usuario) => {
        bcrypt.compare(req.body.senhaAtual, usuario.senha, (erro, batem) => {
            if (batem && req.body.novaSenha) {
                usuario.senha = req.body.novaSenha;
                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(usuario.senha, salt, (erro, hash) => {
                        if (erro) {
                            req.flash("error_msg", "Houve um erro durante a alteração da senha");
                            console.log(req.error_msg)
                            res.status(400).json(req.error_msg);
                        }
                        usuario.senha = hash;
                        usuario.save().then(() => {
                            req.flash("success_msg", "Senha alterada");
                            res.status(200).json({ message: 'Senha atulizada' });
                        }).catch((err) => {
                            req.flash("error_msg", "Houve um erro durante a alteração da senha, tente novamente! ");
                            res.redirect("/");
                        });
                    });
                });
            } else {
                res.status(400).json({ message: 'Senha atual inválida!' })
            }
        });

    });
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) { return next(err); }

        if (!user) { return res.status(401).send(info); }

        req.logIn(user, function (err) {
            res.status(307).redirect('/usuarios/' + req.user.nomeUsuario);
        });
    })(req, res, next);

});

router.get('/:nomeUsuario/', (req, res, next) => {
    if (req.user && req.user.nomeUsuario == req.params.nomeUsuario)
        res.render("usuario", { layout: 'user' })
    else
        res.redirect('/')
})

module.exports = router