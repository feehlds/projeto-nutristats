const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../../src/models/entidades/dieta");
const Dieta = mongoose.model("dietas");


// lista de dietas relacioanada ao usuário logado
router.get('/adicionar',(req,res)=>{
  
    var nutrientes = {
         "_id":{"$id":"5de29e4da67cc26c68be8eae"},"tipoAlimento":"1","Descricao":"Arroz, integral, cozido","Umidade":"70,1","kcal":"124","kj":"517","Proteina":"2,6","Lipideos":"1,0","Colesterol":"NA","carboidrato":"25,8","FibraAlimentar":"2,7","Cinzas":"0,5","Calcio":"5","Magnesio":"59","Manganes":"0,63","Fosforo":"106","Ferro":"0,3","Sodio":"1","Potassio":"75","Cobre":"0,02","Zinco":"0,7","Retinol":"NA","RE":null,"RAE ":null,"Tiamina":"0,08","Riboflavina":"Tr","Piridoxina":"0,08","Niacina":"Tr","VitaminaC":null,
        
        }  
    res.render("dietas/index", { nutrientes})
});
//cadastro de dieta
router.post('/registro', (req, res) => {
    console.log("entrou")
 
    // const dietaNova = new Dieta({
    //     descricao: req.body.descricao,
    //     cafeManha: req.body.cafeManha,
    //     almoco: req.body.almoco,
    //     cafeTarde: req.body.cafeTarde,
    //     janta: req.body.janta,
    //     ativo: req.body.ativo,
    //     Usuario: req.body.IdUsuario
    // });

    // dietaNova.save().then(()=>{
    //     res.status(201).json(dietaNova);
    // }).catch((error)=>{
    //     res.sendStatus(404);
    // });
});

// lista de dietas relacioanada ao usuário logado
router.get('/lista',(req,res)=>{
    Dieta.find({Usuario:req.body.id}).then((dietas)=>{
        res.render("dietas/index", {dietas: dietas})
    }).catch((error)=>{
        res.sendStatus(404);
    });
    
});
// editar uma dieta especifica
router.get("/editar", (req,res)=>{
    Dieta.findOne({_id: req.body.id}).then((dieta)=>{
        
        dieta.descricao = req.body.descricao,
        dieta.cafeManha = req.body.cafeManha,
        dieta.almoco = req.body.almoco,
        dieta.cafeTarde = req.body.cafeTarde,
        dieta.janta = req.body.janta,
        ditea.ativo = req.body.ativo,

        dieta.save().then(()=>{
            res.status(201)
        }).catch((err)=>{
            res.sendStatus(404);
        })

    }).catch((err)=>{
        res.sendStatus(404);
    })
});


// remover uma dieta
router.get('/remover',(req,res)=>{
    Dieta.remove({_id: req.body.id}).then((dieta)=>{
        res.status(201);
    }).catch((error)=>{
        res.sendStatus(404);
    });
    
});

module.exports = router

