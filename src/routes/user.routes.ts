import { Router } from "express";
import { 
    createUserController,
    listAllUsersController,
    updateUserController,
    deleteUserController
} from "../controllers";
import { ensureDate, validateId, validedToken, verifyEmail } from "../middlewares";
import { CreateUserSchema, UpdateUserSchema } from "../schemas";


const userRouter = Router()

userRouter.post('', ensureDate(CreateUserSchema), verifyEmail, createUserController)
userRouter.get('', validedToken, listAllUsersController)
userRouter.patch('/:id', validedToken, validateId, verifyEmail, ensureDate(UpdateUserSchema), updateUserController)
userRouter.delete('/:id', validedToken, validateId, deleteUserController)

export default userRouter