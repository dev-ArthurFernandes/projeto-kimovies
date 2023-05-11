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
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()
})

const UpdateUserSchema = CreateUserSchema.omit({admin: true}).deepPartial()

const UserResponseSchema = UserSchema.omit({password: true})

export {
    CreateUserSchema,
    UserSchema,
    UpdateUserSchema,
    UserResponseSchema
}