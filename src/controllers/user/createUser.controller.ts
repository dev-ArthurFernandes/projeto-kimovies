import { Request, Response } from "express";
import { createUserService } from "../../services";
import { IUserResponse } from "../../interfaces";


const createUserController = async ( req: Request, res: Response): Promise<Response> => {

    const user: IUserResponse = await createUserService(req.body)

    return res.json(user)
}

export default createUserController