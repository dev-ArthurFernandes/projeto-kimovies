import { Router } from 'express';
import { createCategoryController, listAllCategoriesController } from '../controllers';
import { ensureDate, validedToken, verifyCategoryName } from '../middlewares';
import { CategoryRequestSchema } from '../schemas';
import { listAllRealEstatebyCategoryController } from '../controllers/category';


const categoryRouter = Router()

categoryRouter.post('', validedToken, ensureDate(CategoryRequestSchema), verifyCategoryName, createCategoryController)
categoryRouter.get('', listAllCategoriesController)
categoryRouter.get('/:id/realEstate', listAllRealEstatebyCategoryController)

export default categoryRouter