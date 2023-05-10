import { hashSync } from 'bcryptjs';
import { z } from 'zod';


const CreateUserSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().min(10).max(120).transform((pass) => {
        return hashSync(pass, 10)
    }),
    admin: z.boolean().optional().default(false)
})

const UserSchema = CreateUserSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullish()
})

const UpdateUserSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().email().max(45).optional(),
    password: z.string().max(120).transform((pass) => hashSync(pass, 10)).optional()
})

export {
    CreateUserSchema,
    UserSchema,
    UpdateUserSchema
}