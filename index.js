//Importação
    //Requisição da biblioteca express
    const express = require('express');
    const client = require('./src/models/database/conexao');
    const usuarioInserir = require('./src/models/persistencia/usuario');
    const usuario = require('./src/models/entidades/usuario');
    const pesqAlimentos = require ('./src/models/database/pesqAlimentos');
    const bodyParser = require('body-parser')
    const usuarios = require("./src/routes/usuario/usuario");

    //Definindo porta padrão ou 3030
    const PORT = process.env.PORT || 3030
    //normalizando path
    var path = require('path');
    //Atribuindo a app as informações da aplicação
    const app = express();  
    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    //app.use(bodyParser.json());
//Rotas
    //Definindo o caminho de uso
    app.use(express.static(path.join(__dirname, 'public')));
    
    //requests e responses
    app.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname,'public/html/index.html'));
    });
    

  //INSERIR USUARIO/ Atualizar
            var user = new usuario.Usuario();
                //se for atualizar usar usar id id
               //  user.setId("5dbcd4a2e7b987351c771b01")
            // user.setNome("André");
            // user.setDataNascimento("16/01/2000");
            // user.setEmail('test@tete.com.br')
            // user.setNomeUsuario("André");
            // user.setPeso(1.2);
            // user.setSexo("M");
            // user.setAltura(12552);
            // user.setSenha('pedroasfadf');
            // var usuarioPersistencia = new usuarioInserir.Usuario();
            // usuarioPersistencia.inserir(user);
            // usuarioPersistencia.excluir('5dc1b9927573d91da8cba166');
            //usuarioPersistencia.atualizar(user);
            
    

    app.get('/pesqAlimentos', (req, res) => {
        let pesq  = req.query;
        let jsonRes;
        jsonRes
        try {
            pesqAlimentos(pesq.barraPesq).then(result => {
                jsonRes = { "Alimentos" : result };
                res.json(jsonRes);
            });
        }   catch(err){
            res.status(500).send(err);
        }
    });
    app.use("/usuario", usuarios)

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });