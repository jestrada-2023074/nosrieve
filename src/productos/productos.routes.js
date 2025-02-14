import { Router } from 'express';
import {
    getAllProductos,
    createProducto,
    getProductoById,
    deleteProducto,
    updateProducto
} from './productos.controller.js'; // Importa las funciones del controlador de productos

const api = Router();

// Definición de rutas para productos
api.get('/', getAllProductos); // Obtener todos los productos
api.post('/', createProducto); // Crear un nuevo producto
api.get('/:id', getProductoById); // Obtener un producto por ID
api.delete('/:id', deleteProducto); // Eliminar un producto por ID
api.put('/:id', updateProducto); // Actualizar un producto por ID

export default api;