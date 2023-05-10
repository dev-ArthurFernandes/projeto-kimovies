import { z } from 'zod';
import { AddressesSchema } from './addresses.schemas';
import { CategorySchema } from './categories.schemas';


const RealEstateSchema = z.object({
    sold: z.boolean(),
    value: z.number().or(z.string()),
    size: z.number().or(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    address: AddressesSchema,
    category: CategorySchema
})

const CreateRealEstateSchema = RealEstateSchema.omit({
    createdAt: true,
    updatedAt: true
})

export {
    RealEstateSchema,
    CreateRealEstateSchema
}