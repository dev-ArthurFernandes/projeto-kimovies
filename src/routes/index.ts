import { Router } from 'express';
import userRouter from "./user.routes";
import loginRouter from './login.routes';
import realEstateRouter from './realEstate.routes';
import categoryRouter from './category.routes';


const router = Router()


router.use('/users', userRouter)
router.use('/login', loginRouter)
router.use('/realEstate', realEstateRouter)
router.use('/category', categoryRouter)

export default router