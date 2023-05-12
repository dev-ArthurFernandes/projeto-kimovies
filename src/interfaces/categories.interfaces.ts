import { z } from 'zod';
import { CategorySchema, CreateCategorySchema } from '../schemas';


type ICategory = z.infer<typeof CategorySchema>
type ICategoryRequest = z.infer<typeof CreateCategorySchema>


export {
    ICategory,
    ICategoryRequest
}