import { Schema, Types, model, Model } from "mongoose";
import { Country } from "./country.interface";

const CountrySchema = new Schema<Country>(
    {
        code: {
            type: String,
        },
        name: {
            type: String,
        },
        flagImg: {
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

const CountryModel = model('countries',CountrySchema)

export default CountryModel