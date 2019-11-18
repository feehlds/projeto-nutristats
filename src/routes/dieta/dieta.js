const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../../models/entidades/dieta");
const Dieta = mongoose.model("dietas");


router.post('/registro', (req, res) => {
    const dietaNova = new Dieta({
        cafeManha: req.body.cafeManha,
        almoco: req.body.almoco,
        cafeTarde: req.body.cafeTarde,
        janta: req.body.janta,
        Usuario: req.body.IdUsuario
    });

    dietaNova.save().then(()=>{
        res.status(201).json(dietaNova);
    }).catch((error)=>{
        res.sendStatus(404);
    });
});

module.exports = router

