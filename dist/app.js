"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _utils = _interopRequireDefault(require("./utils.js"));
var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));
var _morgan = _interopRequireDefault(require("morgan"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
// // con path, que es un modulo de node se puede traer las direciones de la carpetas y sea multiplataforma
// import {path, dirname} from 'path';

//hay que indicar express de que entienda que utilizaremos handlebars]

//llamando a middleware morgan

// !!! las importaciones se hacen con el archivo escrito con la terminacion '.js', ya que da error

var app = (0, _express["default"])();

//se configura la carpeta views para indicarle a express la dir de es carpeta
//dirname se va a utilizar para tener la ruta absoluta de la direccion de 'view'
app.set('views', _utils["default"] + "/views");

//indicamos que motor de plantilla vamos a utilizar (en vez de servir archivos .html cambio por .hbs)
app.engine('handlebars', _expressHandlebars["default"].engine());
app.set('view engine', 'handlebars');

//middlewares
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));

//routes
app.use('/', _indexRoutes["default"]);

//static files  --> se hace la configuracion de los archivos de la caperta public
app.use(_express["default"]["static"](_utils["default"] + "/public"));
var _default = app;
exports["default"] = _default;