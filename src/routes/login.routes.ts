import { Router } from "express";
import loginController from "../controllers/login/login.controller";


const loginRouter = Router()

loginRouter.use('', loginController)

export default loginRouter