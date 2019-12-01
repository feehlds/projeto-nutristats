//Importação
//Requisição da biblioteca express
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const db = require('./src/models/database/conexaoMongo');
var sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser');
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
require("./config/autenticacao")(passport);

//Routes
const dietas = require("./routes/dieta/dieta");
const usuarios = require("./routes/usuario/usuario");
const nutrientes = require("./routes/nutriente/nutriente");

//Definindo porta padrão ou 3030
const PORT = process.env.PORT || 3030
//normalizando path
var path = require('path');
//Atribuindo a app as informações da aplicação
const app = express();
//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 100
}).then(() => {
    console.log("Conectado com o mongo")
}).catch((err) => {
    console.log("Erro ao se conectar: " + err)
})

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//Sessão
app.use(session({
    secret: "NutriStats Session",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
})
//Rotas
//Definindo o caminho de uso
app.use(express.static(path.join(__dirname, 'public')));

//requests e responses
app.get('/', (req, res) => {
    if (res.locals.user) {
        res.render("index", {user: res.locals.user});
    }
    else
        res.render("index")
});

app.get('/pesqAlimentos', (req, res) => {

});

app.use("/usuarios", usuarios);
app.use("/dietas", dietas);
app.use("/nutrientes", nutrientes);
// O app Listen sempre deve ser a ultima linha do código
app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});