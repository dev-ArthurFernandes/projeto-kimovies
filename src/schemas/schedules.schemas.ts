import { z } from "zod";

const ScheduleResponseSchema = z.object({
    id: z.number().positive().int(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int(),
    userId: z.number().int().positive(),
});

const ScheduleRequestSchema = ScheduleResponseSchema.omit({
    id: true,
    userId: true,
});

export {
    ScheduleRequestSchema,
    ScheduleResponseSchema
}