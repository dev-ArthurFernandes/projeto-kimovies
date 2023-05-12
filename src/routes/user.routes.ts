import { Router } from "express";
import { 
    createUserController,
    listAllUsersController,
    updateUserController,
    deleteUserController
} from "../controllers";
import { ensureDate, validateId, verifyEmail } from "../middlewares";
import { CreateUserSchema, UpdateUserSchema } from "../schemas";


const userRouter = Router()

userRouter.post('', ensureDate(CreateUserSchema), verifyEmail, createUserController)
userRouter.get('', listAllUsersController)
userRouter.patch('/:id', validateId, ensureDate(UpdateUserSchema), verifyEmail, updateUserController)
userRouter.delete('/:id', validateId, deleteUserController)

export default userRouter