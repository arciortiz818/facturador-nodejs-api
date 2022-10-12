import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { insertCustomer, getListCustomers, getCustomer, updateCustomer, deleteCustomer } from './customer.service';

const getCustomers = async (req:Request,res:Response) => {
    const categories = await getListCustomers();
    handleHttp(res,200,categories);
}

const createCustomer = async (req:Request,res:Response) => {
    try {
        const responseCategory = await insertCustomer(req.body)
        handleHttp(res,201,responseCategory);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const getCustomerById = async (req:Request,res:Response) => {
    try {
        const category = await getCustomer(req.params.id);
        handleHttp(res,200,category);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const updateCustomerById = async (req:Request,res:Response) => {
    try {
        const responseCategory = await updateCustomer(req.params.id,req.body)
        handleHttp(res,201,responseCategory);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const deleteCustomerById = async (req:Request,res:Response) => {
    try {
        const responseCategory = await deleteCustomer(req.params.id)
        handleHttp(res,201,responseCategory);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

export {
    getCustomers,
    createCustomer,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById
}
