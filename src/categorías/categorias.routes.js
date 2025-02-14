import { Router } from 'express'
import { 
    getAllCategorias,
    createCategoria,
    getCategoriaById,
    deleteCategoria,
    updateCategoria
} from './categorias.controller.js'

const api = Router()


api.get('/', getAllCategorias)
api.post('/', createCategoria)
api.get('/:id', getCategoriaById)
api.delete('/:id', deleteCategoria)
api.put('/:id', updateCategoria)


export default api