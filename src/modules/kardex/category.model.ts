import { Schema, Types, model, Model } from "mongoose";
import { Category } from "./category.interface";

const CategorySchema = new Schema<Category>(
    {
        code: {
            type: String,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const CategoryModel = model('categories',CategorySchema)

export default CategoryModel