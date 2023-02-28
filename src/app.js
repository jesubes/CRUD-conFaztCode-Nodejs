import express from "express";
// // con path, que es un modulo de node se puede traer las direciones de la carpetas y sea multiplataforma
// import {path, dirname} from 'path';

import __dirname from "./utils.js";

//hay que indicar express de que entienda que utilizaremos handlebars]
import exphbs from 'express-handlebars';

//llamando a middleware morgan
import morgan from "morgan";

// !!! las importaciones se hacen con el archivo escrito con la terminacion '.js', ya que da error
import indexRoutes from './routes/index.routes.js' 

const app = express();

//se configura la carpeta views para indicarle a express la dir de es carpeta
//dirname se va a utilizar para tener la ruta absoluta de la direccion de 'view'
app.set('views', __dirname + "/views")

//indicamos que motor de plantilla vamos a utilizar (en vez de servir archivos .html cambio por .hbs)
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended : false}))

//routes
app.use('/',indexRoutes);

//static files  --> se hace la configuracion de los archivos de la caperta public
app.use(express.static(__dirname + "/public"))


export default app;