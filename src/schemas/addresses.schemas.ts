import { z } from 'zod';


const AddressesSchema = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().max(7).nullish(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const CreateAddressesSchema = AddressesSchema.omit({
    id: true
})

export {
    AddressesSchema,
    CreateAddressesSchema
}