import { z } from 'zod';

const CategoryRequestSchema = z.object({
	name: z.string().max(45)
})

const CategoryResponseSchemas = CategoryRequestSchema.extend({
	id: z.number()
})

const CategoriesSchemas = CategoryResponseSchemas.array()

export {
    CategoriesSchemas,
    CategoryResponseSchemas,
    CategoryRequestSchema
}