import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { insertCategory, getListCategories, getCategory, updateCategory, deleteCategory } from './category.service';

const getCategories = async (req:Request,res:Response) => {
    const categories = await getListCategories();
    handleHttp(res,200,categories);
}

const createCategory = async (req:Request,res:Response) => {
    try {
        const responseCategory = await insertCategory(req.body)
        handleHttp(res,201,responseCategory);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const getCategoryById = async (req:Request,res:Response) => {
    try {
        const category = await getCategory(req.params.id);
        handleHttp(res,200,category);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const updateCategoryById = async (req:Request,res:Response) => {
    try {
        const responseCategory = await updateCategory(req.params.id,req.body)
        handleHttp(res,201,responseCategory);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const deleteCategoryById = async (req:Request,res:Response) => {
    try {
        const responseCategory = await deleteCategory(req.params.id)
        handleHttp(res,201,responseCategory);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

export {
    getCategories,
    createCategory,
    updateCategoryById,
    getCategoryById,
    deleteCategoryById
}
