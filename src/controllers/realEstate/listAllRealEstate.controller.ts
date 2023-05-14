import { Request, Response } from "express";
import { listAllRealEsateService } from "../../services/realEstate";


const listAllRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const realEstates = await listAllRealEsateService()

    return res.json(realEstates)
}

export default listAllRealEstateController