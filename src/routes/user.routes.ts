import { Router } from "express";
import { createUserController } from "../controllers";
import { listAllUsersController, updateUserController } from "../controllers/user";


const userRouter = Router()

userRouter.post('', createUserController)
userRouter.get('', listAllUsersController)
userRouter.patch('/:id', updateUserController)

export default userRouter