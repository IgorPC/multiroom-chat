//Importar o express
let express = require('express');
//Importar o consign para autoload
let consign = require('consign');
//Importar o body-parser para receber formularios
let bodyParser = require('body-parser');
//Importar o expressValidator para validação de formuarios
let expressValidator = require('express-validator');

//Inicia o express
let app = express();

//Seta as varias de views
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configura o middleware express static
app.use(express.static('./app/public'));
//Configura o middleware body-parser para recuperar dados de formularios
app.use(bodyParser.urlencoded({extended: true}));
//Configura o middleware express-validator para validar formularios
app.use(expressValidator());

//Configura a rota para autoload dos arquivos de rotas, controllers e models
consign().include('app/routes').then('app/models').then('app/controllers').into(app);

module.exports = app;