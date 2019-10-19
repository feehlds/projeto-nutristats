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
    client.connect();
    client.query('SELECT * FROM nutrientes;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
          console.log(JSON.stringify(row));
        }
        client.end();
    });
    app.use(express.static(path.join(__dirname, 'public')));
    
    //requests e responses
    app.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname,'public/html/index.html'))
       // res.render("index");
    });

    app.get('/pesqAlimentos', (req, res) => {
        client.connect();
        console.log(req.query);
        let pesq = req.query;
        console.log(pesq.barraPesq);
        client.query('SELECT * from nutrientes WHERE descricao LIKE %?%', [pesq], (err, res) => {
            if (err) console.log(err);
            for(let row of res.rows){
                console.log(JSON.stringify(row));
            }
            client.end();
            }); 
        search(pesq.barraPesq);
    });

    // O app Listen sempre deve ser a ultima linha do código
    app.listen(PORT, function() {
        console.log('Server running on port ' + PORT);
    });