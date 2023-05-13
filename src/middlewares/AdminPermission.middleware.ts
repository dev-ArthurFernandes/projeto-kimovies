import { Request, Response, NextFunction } from "express";
import { AppError } from "../AppError";
import { verify } from "jsonwebtoken";



const adminPermission = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const token: string | undefined = req.headers.authorization?.split(' ')[1]

    if(!token){
        throw new AppError("Missing bearer token", 401)
    }

    verify(token, String(process.env.SERCRET_KEY), (err, decoded: any) => {
        if(err){
            throw new AppError(err.message, 401)
        }

        req.user = {
            id: Number(decoded.id),
            admin: decoded.admin
        }
    })

    return next()
}

export default adminPermission