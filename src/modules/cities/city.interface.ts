import { Types } from "mongoose";

export interface City {
    code: string,
    name: string,
    departmentId: Types.ObjectId,
    active: boolean
}