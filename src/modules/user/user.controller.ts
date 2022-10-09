import { Request, Response } from "express";
import { getListUsers, getUserData } from "./user.service";

const getUsers = (req:Request,res:Response) => {
    const users = getListUsers();
    res.send(users)
}

const getUser = (req:Request,res:Response) => {
    const user = getUserData(req.params.id);
    res.send(user)
}

export {
    getUsers,
    getUser
}