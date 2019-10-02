//Requisição da biblioteca express
const express = require('express');

//Definindo porta padrão ou 3030
const PORT = process.env.PORT || 3030

//Chamando conexão com o banco de dados
//const client = require('./src/models/database/conexao');

var path = require('path');

//Importando banco de dados com sequelize
const bd = require('./src/models/database/conexao');

//Atribuindo a app as informações da aplicação
const app = express();

//testando banco conexao sequelize

bd.sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso ao postgres com sequelize");
}).catch((erro)=>{
    console.log("Falha: " +erro);
});


app.use(express.static(__dirname))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname,'./public/html/index.html'))
});
/*
//client.connect();

client.query('SELECT * FROM nutrientes;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
});
*/
// O app Listen sempre deve ser a ultima linha do código
app.listen(PORT, function() {
    console.log('Server running on port ' + PORT);
});