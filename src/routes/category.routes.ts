import { Router } from 'express';
import { createCategoryController } from '../controllers/category';
import { validedToken } from '../middlewares';


const categoryRouter = Router()

categoryRouter.post('', validedToken, createCategoryController)


export default categoryRouter