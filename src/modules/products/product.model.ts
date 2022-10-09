import { Schema, model } from "mongoose";
import { Product } from "./product.interface";

const ProductSchema = new Schema<Product>(
    {
        code: {
            type: String,
        },
        name: {
            type: String,
        },
        price: {
            type: Number
        },
        quantity: {
            type: Number
        },
        description: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: true
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: 'categories'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ProductModel = model('products',ProductSchema)

export default ProductModel