import { Schema, model } from "mongoose";
import { Customer } from "./customer.interface";

const CustomerSchema = new Schema<Customer>(
    {
        names: {
            type: String,
        },
        surnames: {
            type: String,
        },
        dni: {
            type: String,
        },
        dniType: {
            type: String,
        },
        address: {
            type: String,
        },
        phone: {
            type: Number,
        },
        cellPhone: {
            type: Number,
        },
        countryId: {
            type: Schema.Types.ObjectId,
            ref: 'countries'
        },
        departmentId: {
            type: Schema.Types.ObjectId,
            ref: 'departments'
        },
        cityId: {
            type: Schema.Types.ObjectId,
            ref: 'cities'
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
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

const customer = model('customers',CustomerSchema)

export default customer


