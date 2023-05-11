import { z } from 'zod';
import { LoginSchema } from '../schemas';


type ILogin = z.infer<typeof LoginSchema>

export {
    ILogin
}