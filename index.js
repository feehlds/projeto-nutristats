//Importação
    //Requisição da biblioteca express
    const express = require('express');
    //Cliente pg
    const client = require('./src/models/database/conexao');
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

    app.get('/pesqAlimentos', (req, res) => {
        let pesq  = req.query;
        console.log(pesq)
        console.log(pesq.barraPesq);
        if(pesq.barraPesq != null){
            client.connect();
            pesqAlimentos(pesq.barraPesq);
            let result = pesquisa(pesq.barraPesq);
            client.end();
            res.send(result);
        } else { res.send('erro'); }
        
    });

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });