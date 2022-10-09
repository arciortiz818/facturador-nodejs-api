import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { getListCities, getListCitiesByDepto, insertCity } from './city.service';

const createCity = async (req:Request,res:Response) => {
    try {
        const responseCity = await insertCity(req.body)
        handleHttp(res,201,responseCity);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const getCities = async (req:Request,res:Response) => {
    const cities = await getListCities();
    handleHttp(res,200,cities);
}

const getCitiesByDepartment = async (req:Request,res:Response) => {
    try {
        const cities = await getListCitiesByDepto(req.params.id);
        handleHttp(res,200,cities);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

export {
    createCity,
    getCities,
    getCitiesByDepartment
}
