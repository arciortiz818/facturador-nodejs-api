import { Response } from "express";

// const handleHttp = (res: Response, error:any) => {
//     res.status(500)
//     res.send({error})
// }

const handleHttp = (res:Response,status: number,responseData: any) => {
    let textStatus = '';
    switch (status) {
        case 200 || 201:
            textStatus = 'OK'
            break;
        case 400:
            textStatus = 'BAD REQUEST'
            break;
        case 401:
            textStatus = 'UNAUTHORIZED'
            break;
        case 404:
            textStatus = 'NOT FOUND'
            break;
        case 500:
            textStatus = 'INTERNAL SERVER ERROR'
            break;
        default:
            break;
    }
    res.status(status).send({status: textStatus, data: responseData})
}


export { handleHttp }