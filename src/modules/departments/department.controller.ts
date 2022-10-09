import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { getListDepartments, getListDepartmentsByCountry, insertDepartment } from './department.service';

const createDepartment = async (req:Request,res:Response) => {
    try {
        const responseDepartment = await insertDepartment(req.body)
        handleHttp(res,201,responseDepartment);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const getDepartments = async (req:Request,res:Response) => {
    const departments = await getListDepartments();
    handleHttp(res,200,departments);
}

const getDepartmentsByCountry = async (req:Request,res:Response) => {
    try {
        const departments = await getListDepartmentsByCountry(req.params.id);
        handleHttp(res,200,departments);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

export {
    createDepartment,
    getDepartments,
    getDepartmentsByCountry
}
