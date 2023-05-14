import { Request, Response } from "express";
import { Category } from "../../entities";
import { categoryRepo } from "../../repositories";
import { AppError } from "../../AppError";

const listAllRealEstatebyCategoryService = async (categoryId: number) => {

    const categoryRepoResult: Category | null = await categoryRepo.findOne({
        where: {
            id: categoryId
        },
        relations: {
            realEstate: true,
        },
    })

    if (!categoryRepoResult) {
        throw new AppError("Category not found", 404)
    }

    return categoryRepoResult
}

export default listAllRealEstatebyCategoryService