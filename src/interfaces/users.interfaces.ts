import { User } from "../entities";
import { CreateUserSchema, UserResponseSchema, UserSchema } from "../schemas";
import { z } from 'zod';

type IUser = z.infer<typeof UserSchema>
type IUserRequest = z.infer<typeof CreateUserSchema>
type IUserResponse = z.infer<typeof UserResponseSchema>


export {
    IUser,
    IUserRequest,
    IUserResponse
}