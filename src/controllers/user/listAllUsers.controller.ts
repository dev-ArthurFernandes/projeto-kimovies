import { Request, Response } from "express";
import { listAllUsersService } from "../../services";


const listAllUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users = await listAllUsersService()

    return res.json(users)
}

export default listAllUsersController