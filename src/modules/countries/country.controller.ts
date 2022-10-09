import { Request,Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import { getListCountries, getListCountryDeptos, insertCountry } from './country.service';

const createCountry = async (req:Request,res:Response) => {
    try {
        const responseCountry = await insertCountry(req.body)
        handleHttp(res,201,responseCountry);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

const getCountries = async (req:Request,res:Response) => {
    const countries = await getListCountries();
    handleHttp(res,200,countries);
}

const getCountryDeptos = async (req:Request,res:Response) => {
    try {
        const countryDeptos = await getListCountryDeptos(req.params.id);
        handleHttp(res,200,countryDeptos);
    } catch (error) {
        handleHttp(res,500,error);
    }
}

export {
    createCountry,
    getCountries,
    getCountryDeptos,
}
