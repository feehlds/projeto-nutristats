//Importação
    //Requisição da biblioteca express
    const express = require('express');
    //Definindo porta padrão ou 3030
    const PORT = process.env.PORT || 3030
    //normalizando path
    const path = require('path');
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
        let reqBody = req.query;
        console.log(reqBody.barraPesq);
        if(reqBody.barraPesq){
            let pesquisa = require ('./src/models/database/pesqAlimentos');
            let result = pesquisa(reqBody.barraPesq);
            res.send(result);
        } else { res.end(); }
        
    });

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });