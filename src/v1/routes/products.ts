import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { createProduct, deleteProductById, getProducts, getProductById, updateProductById } from '../../modules/products/product.controller'


const router = Router()

router.get('/',checkJwt,getProducts)
router.get('/:id',getProductById)
router.post('/',createProduct)
router.put('/:id',updateProductById)
router.delete('/:id',deleteProductById)

export {
    router
}