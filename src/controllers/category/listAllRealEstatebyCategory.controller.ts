import { Request, Response } from "express";
import { Category } from "../../entities";
import { listAllRealEstatebyCategoryService } from "../../services/category";

const listAllRealEstatebyCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryId: number = parseInt(req.params.id)

    const categoryRealEstate: Category = await listAllRealEstatebyCategoryService(categoryId)
  
    return res.json(categoryRealEstate)
}

export default listAllRealEstatebyCategoryController