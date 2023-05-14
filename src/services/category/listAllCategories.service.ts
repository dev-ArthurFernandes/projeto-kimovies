import { Category } from "../../entities";
import { categoryRepo } from "../../repositories";

const listAllCategoriesService = async () => {
    
    const categories: Category[] = await categoryRepo.find({})

    return categories
}

export default listAllCategoriesService