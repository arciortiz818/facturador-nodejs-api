import { Customer } from "./customer.interface";
import CustomerModel from "./customer.model";

const insertCustomer = async (category: Customer) => {
    const responseInsert = await CustomerModel.create(category);
    return responseInsert
}

const getListCustomers = async () => {
    const responseQuery = await CustomerModel.find({active: true}).populate('countryId').populate('departmentId').populate('cityId').exec();
    return responseQuery
}

const getCustomer = async (id: string) => {
    const responseQuery = await CustomerModel.findById(id).populate('countryId').populate('departmentId').populate('cityId').exec();
    return responseQuery
}

const updateCustomer = async (id: string, category: Customer) => {
    const responseQuery = await CustomerModel.findOneAndUpdate({_id: id},category);
    return responseQuery
}

const deleteCustomer = async (id: string) => {
    const responseQuery = await CustomerModel.findOneAndUpdate({_id: id},{active: false});
    return responseQuery
}

export { insertCustomer, getListCustomers, getCustomer, updateCustomer, deleteCustomer }