import { z } from 'zod';


const CategorySchema = z.object({
    id: z.number(),
    name: z.string().max(45)
})

const CreateCategorySchema = CategorySchema.omit({ id: true })

export {
    CategorySchema,
    CreateCategorySchema
}