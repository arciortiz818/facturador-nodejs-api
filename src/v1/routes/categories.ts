import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { createCategory, deleteCategoryById, getCategories, getCategoryById, updateCategoryById } from '../../modules/categories/category.controller'


const router = Router()


router.get('/',getCategories)


router.get('/:id',getCategoryById)
router.post('/',createCategory)
router.put('/:id',updateCategoryById)
router.delete('/:id',deleteCategoryById)

export {
    router
}