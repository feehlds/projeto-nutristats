//Requisição da biblioteca express
const express = require('express');

const PORT = process.env.PORT || 3030

//Atribuindo a app as informações da aplicação
const app = express();

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

var path = require('path');
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

//Tentando fazer conexão com o banco de dados
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