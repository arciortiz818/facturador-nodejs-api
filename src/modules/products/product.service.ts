import { Product } from "./product.interface";
import ProductModel from "./product.model";

const insertProduct = async (product: Product) => {
    const responseInsert = await ProductModel.create(product);
    return responseInsert
}

const getListProducts = async () => {
    const responseQuery = await ProductModel.find({active: true});
    return responseQuery
}

const getProduct = async (id: string) => {
    const responseQuery = await ProductModel.findById(id);
    return responseQuery
}

const updateProduct = async (id: string, product: Product) => {
    const responseQuery = await ProductModel.findOneAndUpdate({_id: id},product);
    return responseQuery
}

const deleteProduct = async (id: string) => {
    const responseQuery = await ProductModel.findOneAndUpdate({_id: id},{active: false});
    return responseQuery
}

export { insertProduct, getListProducts, getProduct, updateProduct, deleteProduct }