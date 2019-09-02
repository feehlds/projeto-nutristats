//Requisição da biblioteca express
const express = require('express');

const PORT = process.env.PORT || 3030

//Atribuindo a app as informações da aplicação
const app = express();


///Conmentário andré
/// =>

/*
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

A sintax usada da bilbioteca do express é

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

*/
var path = require('path');
app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

app.get("/teste", function(req,res){
    res.send("Teste nodemon rodando")
})



// O app Listen sempre deve ser a ultima linha do código
app.listen(PORT, function() {
    console.log('Server running on port ' + PORT);
});