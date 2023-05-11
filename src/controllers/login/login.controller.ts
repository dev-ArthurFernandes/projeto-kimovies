import { Request, Response } from 'express';
import { loginService } from '../../services';


const loginController = async (req: Request, res: Response): Promise<Response> => {

    const token = await loginService(req.body)

    return res.json({
        token: token
    })
}

export default loginController