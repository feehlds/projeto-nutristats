const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../../src/models/entidades/nutriente");
const Nutriente = mongoose.model("nutrientes");


router.get('', (req, res) => {
    Nutriente.find({ Descricao: new RegExp(req.query.barraPesq, 'i') }).then((nutrientes) => {
        if (req.user)
            res.render("usuario", {layout: 'user', nutrientes: nutrientes})
        else
            res.render("index", { nutrientes: nutrientes, isIndex: "true" });
    }).catch((err) => {
        req.flash("error_msg", "houve um erro ao listar os nutrientes");
        res.redirect("/");
    });
});

module.exports = router