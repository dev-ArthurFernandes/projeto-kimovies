import { z } from 'zod';
import { ScheduleRequestSchema, ScheduleResponseSchema } from '../schemas/schedules.schemas';


type IScheduleRequest = z.infer<typeof ScheduleRequestSchema>
type IScheduleResponse = z.infer<typeof ScheduleResponseSchema>

export {
    IScheduleRequest,
    IScheduleResponse
}