//Importação
    //Requisição da biblioteca express
    const express = require('express');
    //Definindo porta padrão ou 3030
    const PORT = process.env.PORT || 3030
    //Importando banco de dados com sequelize
    const bd = require('./src/models/database/conexao');
    //utilitario para receber dados de qualquer formulário
    const bodyParser = require("body-parser");
    //Tabela de Nutrientes
    const tbNutriente = require("./src/models/database/tbNutrientes");
    var path = require('path');
    //Atribuindo a app as informações da aplicação
    const app = express();
    
//configuração
    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json())

    //testando banco conexao sequelize
    bd.sequelize.authenticate().then(()=>{
        console.log("Conectado com sucesso ao postgres com sequelize");
    }).catch((erro)=>{
        console.log("Falha: " +erro);
    });

//Rotas
    //Definindo o caminho de uso
    app.use(express.static(path.join(__dirname, 'public')));

    //requests e responses
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'public/html/index.html'))
       // res.render("index");
    });

    app.get('/login.html', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/html/login.html'))
    })

    app.get('/cadastro.html', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/html/cadastro.html'))
    });

    app.get('/tabelaNutrientes', (req, res)=> {
        //res.sendFile(path.join(__dirname,'/html/index.html'))
        tbNutriente.findAll().then((nutrientes)=>{
            res.render("tabelaNutrientes", {nutrientes:nutrientes});
        });

    });

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });