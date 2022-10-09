import { Types } from "mongoose";

export interface Department {
    code: string,
    name: string,
    countryId: Types.ObjectId,
    active: boolean
}