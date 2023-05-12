import { z } from 'zod';
import { CreateRealEstateSchema, RealEstateSchema } from '../schemas';


type IRealEstate = z.infer<typeof RealEstateSchema>
type IRealEstateRequest = z.infer<typeof CreateRealEstateSchema>

export {
    IRealEstate,
    IRealEstateRequest
}