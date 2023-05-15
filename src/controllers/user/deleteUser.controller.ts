import { Request, Response } from "express";
import { deleteUserService } from "../../services";
import { AppError } from "../../AppError";



const deleteUserController =async (req: Request, res: Response): Promise<Response> => {

    if(!req.user.admin){
        throw new AppError("Insufficient permission", 403)
    }
    
    const userId: number = parseInt(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}


export default deleteUserController