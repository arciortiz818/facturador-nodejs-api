import { Schema, Types, model, Model } from "mongoose";
import { City } from "./city.interface";

const CitySchema = new Schema<City>(
    {
        code: {
            type: String,
        },
        name: {
            type: String,
        },
        departmentId: {
            type: Schema.Types.ObjectId,
            ref: 'departments'
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

const CityModel = model('cities',CitySchema)

export default CityModel