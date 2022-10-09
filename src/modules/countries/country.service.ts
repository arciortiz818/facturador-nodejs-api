import { Country } from "./country.interface";
import CountryModel from "./country.model";
import DepartmentModel from "../departments/department.model";

const insertCountry = async (country: Country) => {
    const responseInsert = await CountryModel.create(country);
    return responseInsert
}

const getListCountries = async () => {
    const responseQuery = await CountryModel.find({active: true});
    return responseQuery
}

const getListCountryDeptos = async (id: string) => {
    const responseQuery = await DepartmentModel.find({
        countryId: id,
        active: true
    });
    return responseQuery
}



export { getListCountries,insertCountry,getListCountryDeptos }