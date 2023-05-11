import { Router } from "express";
import { createUserController } from "../controllers";


const userRouter = Router()

userRouter.post('', createUserController)

export default userRouter