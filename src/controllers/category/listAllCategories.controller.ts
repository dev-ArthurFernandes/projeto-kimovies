import { Request, Response} from 'express';
import { ICategory } from "../../interfaces"
import { listAllCategoriesService } from "../../services"

const listAllCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const category: ICategory[] = await listAllCategoriesService()
  
    return res.json(category)
}

export default listAllCategoriesController