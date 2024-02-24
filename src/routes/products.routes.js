// Aquí se trabaja para las rutas de productos
import { Router } from "express"; // Clase para crear rutas
import { getAll, getOne, insertProduct, updateProduct,deleteProduct,home} from '../controllers/products.controller.js'; // Importamos la lógica del controlador
import { insertClient, clients, getClients, updateClient, getClient, deleteClient} from "../controllers/clientes.controller.js";
import path from "path";
import ejs from "ejs";
import express from "express";

const router = Router();

// Aquí van las rutas

router.get('/',home); // Aquí estamos extrayendo la lógica de products.controller.js
//router.get('/edit',getAll); 
router.get('/products', getAll); 
router.get('/pedidos', getClients); 
router.post('/pedidos',insertClient)
//router.get('/', (req, res) => {
//	res.sendFile('/Users/Abimaello/Downloads/API-GROCERIES-main/src/public/index.html')
//}) 

//router.get('/', getAll); // Aquí estamos extrayendo la lógica de products.controller.js
//router.get('/:bc', getOne);

router.post('/products', insertProduct); 
router.get('/pedidos/:username', getClient);
router.post('/pedidos/:username', updateClient); //put
router.delete('/pedidos/:username', deleteClient);



export default router;




