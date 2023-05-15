import { Request, Response } from "express";
import { listAllUsersService } from "../../services";
import { AppError } from "../../AppError";


const listAllUsersController = async (req: Request, res: Response): Promise<Response> => {

    if(!req.user.admin){
        throw new AppError("Insufficient permission", 403)
    }

    const users = await listAllUsersService()

    return res.json(users)
}

export default listAllUsersController