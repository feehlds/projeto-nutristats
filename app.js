//Requisição da biblioteca express
const express = require('express');

const PORT = process.env.PORT || 3030

//Atribuindo a app as informações da aplicação
const app = express();

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
    console.log('So good so far')
});

var path = require('path');
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/html/index.html'))
});