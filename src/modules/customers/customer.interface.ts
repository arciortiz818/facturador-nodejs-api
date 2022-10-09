import { Types } from "mongoose";

export interface Customer{
    names: string,
    surnames: string,
    dni: string,
    dniType: string,
    address: string,
    phone: number,
    cellPhone: number,
    countryId: Types.ObjectId
    departmentId: Types.ObjectId,
    cityId: Types.ObjectId,
    userId: Types.ObjectId,
    active: boolean
}