import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { insertCategory, getListCategories, getCategory, updateCategory, deleteCategory } from './category.service';

const getCategories = async (req:Request,res:Response) => {
    const categories = await getListCategories();
    res.send(categories)
}

const createCategory = async (req:Request,res:Response) => {
    try {
        const responseCategory = await insertCategory(req.body)
        res.send(responseCategory)
    } catch (error) {
        handleHttp(res,error);
    }
}

const getCategoryById = async (req:Request,res:Response) => {
    try {
        const category = await getCategory(req.params.id);
        res.send(category)
    } catch (error) {
        handleHttp(res,error);
    }
}

const updateCategoryById = async (req:Request,res:Response) => {
    try {
        console.log('actualizando')
        const responseCategory = await updateCategory(req.params.id,req.body)
        res.send(responseCategory)
    } catch (error) {
        handleHttp(res,error);
    }
}

const deleteCategoryById = async (req:Request,res:Response) => {
    try {
        const responseCategory = await deleteCategory(req.params.id)
        res.send(responseCategory)
    } catch (error) {
        handleHttp(res,error);
    }
}

export {
    getCategories,
    createCategory,
    updateCategoryById,
    getCategoryById,
    deleteCategoryById
}
