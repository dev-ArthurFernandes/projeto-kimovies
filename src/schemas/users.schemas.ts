import { hashSync } from 'bcryptjs';
import { z } from 'zod';


const CreateUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().optional().default(false)
})

const UserSchema = CreateUserSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()
})

const UpdateUserSchema = CreateUserSchema.deepPartial()

const UserResponseSchema = UserSchema.omit({password: true})

const UserResponseListSchema = UserResponseSchema.array()

export {
    CreateUserSchema,
    UserSchema,
    UpdateUserSchema,
    UserResponseSchema,
    UserResponseListSchema
}