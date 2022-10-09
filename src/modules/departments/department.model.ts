import { Schema, model } from "mongoose";
import { Department } from "./department.interface";

const DepartmentSchema = new Schema<Department>(
    {
        code: {
            type: String,
        },
        name: {
            type: String,
        },
        countryId: {
            type: Schema.Types.ObjectId,
            ref: 'countries'
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

const department = model('departments',DepartmentSchema)

export default department