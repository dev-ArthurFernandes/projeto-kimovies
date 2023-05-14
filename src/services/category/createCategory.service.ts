import { ICategory, ICategoryRequest } from "../../interfaces";
import { categoryRepo } from "../../repositories";
import { CategoryResponseSchemas } from "../../schemas";



const createCategoryService = async (payload: ICategoryRequest): Promise<ICategory> => {

    const newCategory = categoryRepo.create({...payload})

    await categoryRepo.save(newCategory)

    return CategoryResponseSchemas.parse(newCategory)

}

export default createCategoryService