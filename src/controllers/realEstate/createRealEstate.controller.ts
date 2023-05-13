import { Request, Response } from "express";
import { createRealEstateService } from "../../services";
import { AppError } from "../../AppError";


const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    if(!req.user.admin){
        throw new AppError('Insufficient permission',403)
    }

    const newRealEstate = await createRealEstateService(req.body)

    return res.status(201).json(newRealEstate)
}

export default createRealEstateController