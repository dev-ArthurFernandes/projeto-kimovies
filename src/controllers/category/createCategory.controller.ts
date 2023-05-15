import { Request, Response } from "express";
import { AppError } from "../../AppError";
import createCategoryService from "../../services/category/createCategory.service";


const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    if(!req.user.admin){
        throw new AppError("Insufficient permission", 403)
    }

    const newCategory = await createCategoryService(req.body)

    return res.status(201).json(newCategory)
}

export default createCategoryController