const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../../src/models/entidades/nutriente");
const Nutriente = mongoose.model("nutrientes");


router.get('', (req, res) =>{
    Nutriente.find({Descricao: new RegExp(req.query.barraPesq,'i')}).then((nutrientes)=>{   
    res.render("index", {nutrientes: nutrientes});
    }).catch((err)=>{
        req.flash("error_msg","houve um erro ao listar os nutrientes" );
        res.redirect("/");
    });
});

module.exports = router