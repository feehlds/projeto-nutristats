//Requisição da biblioteca express
const express = require('express');

const PORT = process.env.PORT || 3030

//Atribuindo a app as informações da aplicação
const app = express();

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();


client.query('SELECT * FROM nutrientes;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
});

// O app Listen sempre deve ser a ultima linha do código
app.listen(PORT, function() {
    console.log('Server running on port ' + PORT);
});