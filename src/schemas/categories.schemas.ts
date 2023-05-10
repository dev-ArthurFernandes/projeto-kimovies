import { z } from 'zod';


const CategorySchema = z.object({
    id: z.number(),
    name: z.string().max(45)
})

export {
    CategorySchema
}