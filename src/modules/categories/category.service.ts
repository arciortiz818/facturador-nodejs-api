import { Category } from "./category.interface";
import CategoryModel from "./category.model";

const insertCategory = async (category: Category) => {
    const responseInsert = await CategoryModel.create(category);
    return responseInsert
}

const getListCategories = async () => {
    const responseQuery = await CategoryModel.find({active: true});
    return responseQuery
}

const getCategory = async (id: string) => {
    const responseQuery = await CategoryModel.findById(id);
    return responseQuery
}

const updateCategory = async (id: string, category: Category) => {
    const responseQuery = await CategoryModel.findOneAndUpdate({_id: id},category);
    return responseQuery
}

const deleteCategory = async (id: string) => {
    const responseQuery = await CategoryModel.findOneAndUpdate({_id: id},{active: false});
    return responseQuery
}

export { insertCategory, getListCategories, getCategory, updateCategory, deleteCategory }