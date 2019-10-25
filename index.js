//Importação
    //Requisição da biblioteca express
    const express = require('express');
    const client = require('./src/models/database/conexao');
    const search = require('./src/models/database/pesqAlimentos')
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
        res.sendFile(path.join(__dirname,'public/html/index.html'))
    });

    app.get('/pesqAlimentos', (req, res) => {
        console.log(req.query);
        let pesq = req.query;
        console.log(pesq.barraPesq);
        client.connect();
        client.query("SELECT * from nutrientes WHERE descricao LIKE '%"+pesq.barraPesq+"%'", (err, res) => {
            if (err) console.log(err);
            for(let row of res.rows){
                console.log(JSON.stringify(row));
            }
        });
        client.end(); 
    });

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });