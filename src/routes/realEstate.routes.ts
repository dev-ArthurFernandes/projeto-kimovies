import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate";
import { ensureDate } from "../middlewares";
import { CreateRealEstateSchema } from "../schemas";
import adminPermission from "../middlewares/AdminPermission.middleware";


const realEstateRouter = Router()

realEstateRouter.post('', adminPermission, ensureDate(CreateRealEstateSchema), createRealEstateController)


export default realEstateRouter