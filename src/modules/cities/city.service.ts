import { City } from "./city.interface";
import CityModel from "./city.model";

const insertCity = async (city: City) => {
    const responseInsert = await CityModel.create(city);
    return responseInsert
}

const getListCities = async () => {
    const responseQuery = await CityModel.find({active: true}).populate('departmentId').exec()
    return responseQuery
}

const getListCitiesByDepto = async (idDepto: string) => {
    const responseQuery = await CityModel.find({departmentId: idDepto,active: true})
    return responseQuery
}


export { getListCities, insertCity, getListCitiesByDepto }