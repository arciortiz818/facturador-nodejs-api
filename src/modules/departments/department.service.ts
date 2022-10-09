import { Department } from "./department.interface";
import DepartmentModel from "./department.model";

const insertDepartment = async (department: Department) => {
    const responseInsert = await DepartmentModel.create(department);
    return responseInsert
}

const getListDepartments = async () => {
    const responseQuery = await DepartmentModel.find({active: true});
    return responseQuery
}

const getListDepartmentsByCountry = async (idCountry: string) => {
    const responseQuery = await DepartmentModel.find({countryId: idCountry,active: true})
    return responseQuery
}


export { getListDepartments, insertDepartment, getListDepartmentsByCountry }