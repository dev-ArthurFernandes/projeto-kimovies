import * as Express from "express";
import {
    createRealEstateController,
    listAllRealEstateController
} from "../controllers";
import {
    ensureDate,
    validedToken
} from "../middlewares";
import {
    RealEstateRequestSchema
} from "../schemas";


const realEstateRouter = Express.Router()

realEstateRouter.post('', validedToken, ensureDate(RealEstateRequestSchema), createRealEstateController)
realEstateRouter.get('', listAllRealEstateController)


export default realEstateRouter