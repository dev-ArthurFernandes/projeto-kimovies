import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { AppError } from "../AppError";
import { categoryRepo } from "../repositories";

const verifyCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const name: string = req.body.name
  
    if (name) {
        const categoryRepoResult: Category | null = await categoryRepo.findOneBy({
            name: name,
        });

        if (categoryRepoResult) {
            throw new AppError("Category already exists", 409)
        }
    }

    return next()
}

export default verifyCategoryName