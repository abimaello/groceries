import express from "express";
import morgan from "morgan";
import path from "path";
import ejs from "ejs";
//import { path } from "express";
//con esto configuramos las variables de etnrono
import {config} from 'dotenv';
config();
import productsRouter from './routes/products.routes.js'; 
//variables de entorno para el puerto 
const app=express();


//Settings: Se van aconfigurar que va ocupar un motor de pnatilla para responder html
app.set('view engine','ejs');

app.use(express.static(path.join('/Users/Abimaello/Downloads/API-GROCERIES-main/src/public')))

// static files

//Middlewares: Son funciones que se invocan en cada peticion HTTP y permiten implementar funcionalidades transversales
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/api/products',productsRouter); //api/products es un prefijo


export default app; //exportar para quien lo pueda usar en este caso index.js

