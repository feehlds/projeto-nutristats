//Requisição da biblioteca express
const express = require('express');

//Definindo porta padrão ou 3030
const PORT = process.env.PORT || 3030

var path = require('path');

//Atribuindo a app as informações da aplicação
const app = express();

//Definindo o caminho de uso
app.use(express.static(path.join(__dirname, 'public')));

//requests e responses
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, './public/html/index.html'))
});

// O app Listen sempre deve ser a ultima linha do código
app.listen(PORT, function() {
    console.log('Server running on port ' + PORT);
});