import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?: string | JwtPayload;
}

const checkJwt = (req:RequestExt,res:Response,next:NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = verifyToken(`${jwt}`)
        if(!isUser){
            res.status(401).send("NO_TIENES_SESION_VALIDA")
        }else{
            req.user = isUser
            next()
        }
    } catch (e) {
        res.status(400).send("SESION_NO_VALIDA")
    }
}

export { checkJwt }