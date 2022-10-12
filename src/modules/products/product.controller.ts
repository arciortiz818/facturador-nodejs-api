import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { insertProduct, getListProducts, getProduct, updateProduct, deleteProduct } from './product.service';

const getProducts = async (req:Request,res:Response) => {
    const products = await getListProducts();
    handleHttp(res,200,products);
}

const createProduct = async (req:Request,res:Response) => {
    try {
        const responseProduct = await insertProduct(req.body)
        handleHttp(res,201,responseProduct);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const getProductById = async (req:Request,res:Response) => {
    try {
        const product = await getProduct(req.params.id);
        handleHttp(res,200,product);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const updateProductById = async (req:Request,res:Response) => {
    try {        
        const response = await updateProduct(req.params.id,req.body)
        handleHttp(res,201,response);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const deleteProductById = async (req:Request,res:Response) => {
    try {
        const response = await deleteProduct(req.params.id)
        handleHttp(res,201,response);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

export {
    getProducts,
    createProduct,
    updateProductById,
    getProductById,
    deleteProductById
}
