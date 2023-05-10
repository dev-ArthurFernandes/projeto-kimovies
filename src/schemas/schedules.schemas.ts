import { z } from 'zod';
import { RealEstateSchema } from './realEstate.schemas';
import { UserSchema } from './users.schemas';


const SchedulSchema = z.object({
    id: z.number(),
    date: z.date(),
    hour: z.string(),
    realEstateId: RealEstateSchema,
    user: UserSchema
})