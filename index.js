//Importação
    //Requisição da biblioteca express
    const express = require('express');
    const usuarioInserir = require('./src/models/persistencia/usuario');
    const usuario = require('./src/models/entidades/usuario');
    const pesqAlimentos = require ('./src/models/database/pesqAlimentos');
    var sslRedirect = require('heroku-ssl-redirect');
    const bodyParser = require('body-parser');
    const usuarios = require("./src/routes/usuario/usuario");
    const passport = require("passport");
    const flash = require("connect-flash");
    const session = require("express-session");
    require("./config/autenticacao")(passport);

    //Cross Origin to use on local angular req
    var cors = require('cors');
    //Definindo porta padrão ou 3030
    const PORT = process.env.PORT || 3030
    //normalizando path
    var path = require('path');
    //Atribuindo a app as informações da aplicação
    const app = express();  
    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //HTTPS
    app.use(sslRedirect(['development', 'production']));
    
    //Sessão
    app.use(session({
        secret: "NutriStats Session",
        resave: true,
        saveUninitialized: true
    }));  
    app.use(cors()); 
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());  
    //middlewares
    app.use((req, res, next) =>{
      //  res.locals.success_msg = req.flash("success_msg")
       // res.locals.error_msg = req.flash("error_msg")
       // res.locals.error = req.flash("error")
        res.locals.user = req.user || null;
        if(res.locals.user){
            delete res.locals.user['senha'];
            console.log(res.locals.user)
            res.send(res.locals.user)
        }   else
            next();
    }) 
//Rotas
    //Definindo o caminho de uso
    app.use(express.static(path.join(__dirname, 'nutri-front', 'dist', 'nutri-front')));
    
    //requests e responses
    app.get('/', (req, res, next) => {
        console.log('bateu')
        console.log(req.user);
        res.status(200).sendFile(path.join(__dirname, 'nutri-front/dist/nutri-front/index.html'));
    });
            
    app.get('/pesqAlimentos', (req, res) => {
        let pesq  = req.query;
        try {
            pesqAlimentos(pesq.barraPesq).then(result => {
                res.status(200).json(result);
            });
        }   catch(err){
            res.status(500).send(err);
        }
    });

    app.use("/usuario", usuarios);

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });