import { Request, Response } from 'express';
import { updateUserService } from '../../services';
import { IUserUpdateRequest } from '../../interfaces';
import { AppError } from '../../AppError';

const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    if(req.user.admin === true || req.user.id === Number(req.params.id)){

        const userData: IUserUpdateRequest = req.body

        const userId: number = parseInt(req.params.id)

        const udpatedUser = await updateUserService(userData, userId)

        return res.json(udpatedUser)

    }else{
        throw new AppError("Insufficient permission", 403)
    }
}

export default updateUserController