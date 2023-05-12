import { User } from "../entities";
import { CreateUserSchema, UpdateUserSchema, UserResponseSchema, UserSchema } from "../schemas";
import { z } from 'zod';

type IUser = z.infer<typeof UserSchema>
type IUserRequest = z.infer<typeof CreateUserSchema>
type IUserUpdateRequest = z.infer<typeof UpdateUserSchema>
type IUserResponse = z.infer<typeof UserResponseSchema>

export {
    IUser,
    IUserRequest,
    IUserUpdateRequest,
    IUserResponse,
}