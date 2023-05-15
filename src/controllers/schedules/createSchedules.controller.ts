import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces";
import { createSchedulesService } from "../../services/schedules";


const createSchedulesControllers = async (req: Request, res: Response): Promise<Response> => {

    const idUser: number = req.user.id
    
    const realEstateId: number = parseInt(req.body.realEstateId)

    const schedulesResult: string = await createSchedulesService(req.body, idUser, realEstateId)
  
    return res.status(201).json(schedulesResult)
}

export default createSchedulesControllers