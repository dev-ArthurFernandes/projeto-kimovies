import { z } from 'zod';
import { AddressRequestSchemas, AddressResponseSchemas } from './addresses.schemas';
import { CategoryResponseSchemas } from './categories.schemas';

const RealEstateRequestSchema = z.object({
	value: z.number().min(-9999999999.99).max(9999999999.99).or(z.string()),
	size: z.number().int().positive(),
	address: AddressRequestSchemas,
	categoryId: z.number()
})

const RealEstateResponseSchema = RealEstateRequestSchema.omit({ categoryId: true }).extend({
    id: z.number(),
	address: AddressResponseSchemas,
	category: CategoryResponseSchemas,
	sold: z.boolean(),
	createdAt: z.string(),
	updatedAt: z.string()
})

const RealEstatesListSchema = z.array(RealEstateResponseSchema.omit({ address: true, category: true }))

const RealEstateByCategorySchema = CategoryResponseSchemas.extend({
	realEstate: RealEstatesListSchema
})

export {
    RealEstateByCategorySchema,
    RealEstateRequestSchema,
    RealEstatesListSchema,
    RealEstateResponseSchema
}