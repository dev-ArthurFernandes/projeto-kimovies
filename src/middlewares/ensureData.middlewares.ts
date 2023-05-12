import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';


const ensureDate = (Schema: ZodSchema) => (req: Request, res: Response, next: NextFunction): void => {

    const validDate: ZodSchema = Schema.parse(req.body)

    req.body = validDate

    return next()
}

export default ensureDate