const express = require('express');
const router = express.Router();
const usuario = require("../models/entidades/usuario");
const UsuarioPers = require('../models/persistencia/usuario');
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/registro", (req, res) =>{
    res.render("usuarios/registro")
});

router.post("/registro", (req,res) => {
    var up = new UsuarioPers.Usuario();

    var usuarioNovo = new usuario.Usuario();

    usuarioNovo.setNomeUsuario(req.body.nomeUsuario);
    usuarioNovo.setSenha(req.body.senha);
    
    bcrypt.genSalt(10, (erro, salt) => {
        bcrypt.hash(usuarioNovo.getSenha(), salt, (erro, hash) =>{
            if(erro){
               // req.flash("error_msg", "Houve um erro durante o salvamento do usuario")
                console.log("DEU ERRO", erro);
            }

            usuarioNovo.setSenha(hash);
            up.inserir(usuarioNovo).then(()=>{

            }).catch((err)=>{
                console.log(err);
            });
           
        });
    });


       
     

    
});