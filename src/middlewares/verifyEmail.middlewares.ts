import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces';
import { userRepo } from '../repositories';
import { AppError } from '../AppError';


const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    if(req.body.email){
        const user: IUser | null = await userRepo.findOneBy({email: req.body.email})

        if(user){
            throw new AppError("Email already exists", 409)
        }
    }

    return next()
}

export default verifyEmail