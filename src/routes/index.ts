import { Router } from 'express';
import userRouter from "./user.routes";
import loginRouter from './login.routes';
import realEstateRouter from './realEstate.routes';


const router = Router()


router.use('/users', userRouter)
router.use('/login', loginRouter)
router.use('/realEstate', realEstateRouter)


export default router