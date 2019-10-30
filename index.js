//Importação
    //Requisição da biblioteca express
    const express = require('express');
    const mongo = require('./src/models/database/conexaoMongo');
    const client = require('./src/models/database/conexao');
    const usuarioInserir = require('./src/models/persistencia/usuario');
    const usuario = require('./src/models/entidades/usuario');
    const pesqAlimentos = require ('./src/models/database/pesqAlimentos');

    //Definindo porta padrão ou 3030
    const PORT = process.env.PORT || 3030
    //normalizando path
    var path = require('path');
    //Atribuindo a app as informações da aplicação
    const app = express();  

//Rotas
    //Definindo o caminho de uso
    app.use(express.static(path.join(__dirname, 'public')));
    
    //requests e responses
    app.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname,'public/html/index.html'));
    });
    
  
    var user = new usuario.Usuario();
    user.setNome("sdfasf");
    user.setDataNascimento("16/01/2000");
   
    user.setNomeUsuario("sfasfdsfa");
    user.setPeso(1.2);
    user.setSexo("M");
    user.setAltura(12552);
    console.log(user.getAltura());
    user.setSenha('andre');
    var inserir = new usuarioInserir.Usuario();
    
    inserir.inserir(user);


    app.get('/pesqAlimentos', (req, res) => {
        console.log(req.query);
        let pesq  = req.query;
        console.log(pesq.barraPesq);
        client.connect();
        let result = pesqAlimentos(pesq.barraPesq);
        console.log(result);
        client.end();
        res.json(result);
        
        
    });

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });