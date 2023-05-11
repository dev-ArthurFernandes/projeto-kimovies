import { Request, Response } from 'express';
import { updateUserService } from '../../services';
import { IUserUpdateRequest } from '../../interfaces';


const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userData: IUserUpdateRequest = req.body

    const userId: number = parseInt(req.params.id)

    const udpatedUser = await updateUserService(userId, userData)

    return res.status(201).json(udpatedUser)
}

export default updateUserController