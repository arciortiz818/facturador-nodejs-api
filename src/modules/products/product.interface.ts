import { Types } from "mongoose"

export interface Product {
    code: string,
    name: string,
    price: number,
    quantity: number,
    description: string,
    active: boolean,
    categoryId: Types.ObjectId
}