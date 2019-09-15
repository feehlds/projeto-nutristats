//Requisição da biblioteca express
//Carregando módulos
const express = require('express');
const handlebars = require('express-handlebars')
    
const PORT = process.env.PORT || 3030

//Atribuindo a app as informações da aplicação
const app = express();


//Configurações
    //Handlebars
        app.engine('handlebars', handlebars({extended: true}))
        app.set('view engine', 'handlebars')


//Rotas
    var path = require('path');
    app.use(express.static(__dirname))

    app.get('/', (req, res)=> {
        //res.sendFile(path.join(__dirname,'/html/index.html'))
        res.render("index")
    });
    app.get('/cadastro', (req, res)=> {
        //res.sendFile(path.join(__dirname,'/html/index.html'))
        res.render("cadastro")
    });

    app.get("/teste", function(req,res){
        res.send("Teste nodemon rodando")
    })




// O app Listen sempre deve ser a ultima linha do código
app.listen(PORT, function() {
    console.log('Server running on port ' + PORT);
});