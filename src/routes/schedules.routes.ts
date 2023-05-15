import { Router } from "express";
import { ensureDate, validedToken, verifySchedule } from "../middlewares";
import { ScheduleRequestSchema } from "../schemas/schedules.schemas";
import { createSchedulesControllers } from "../controllers/schedules";


const scheudlesRouter = Router()


scheudlesRouter.post('', validedToken, ensureDate(ScheduleRequestSchema), verifySchedule, createSchedulesControllers)

export default scheudlesRouter