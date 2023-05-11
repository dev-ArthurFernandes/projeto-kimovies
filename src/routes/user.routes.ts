import { Router } from "express";
import { 
    createUserController,
    listAllUsersController,
    updateUserController,
    deleteUserController
} from "../controllers";


const userRouter = Router()

userRouter.post('', createUserController)
userRouter.get('', listAllUsersController)
userRouter.patch('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController)

export default userRouter