import { Request, Response, NextFunction } from "express";
import { addresssesRepo, categoryRepo, realEstateRepo, schedulesRepo, userRepo } from "../repositories";
import { AppError } from "../AppError";


const validateId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const way: string = req.url

    const id: number = parseInt(req.params.id)

    if(way.includes('users')){

        const user = userRepo.findOneBy({id: id})

        if(!user){
            throw new AppError("User not found", 404)
        }
    }

    if(way.includes('categories')){

        const category = categoryRepo.findOneBy({id: id})

        if(!category){
            throw new AppError("Category not found", 404)
        }

    }

    if(way.includes('realEstate')){

        const realEstate = realEstateRepo.findOneBy({id: id})

        if(!realEstate){
            throw new AppError("Real Estate not found", 404)
        }
    }

    if(way.includes('schedules')){

        const schedule = schedulesRepo.findOneBy({id: id})

        if(!schedule){
            throw new AppError("Schedule not found", 404)
        }
    }

    if(way.includes('addresses')){

        const address = addresssesRepo.findOneBy({id: id})

        if(!address){
            throw new AppError("Address not found", 404)
        }
    }

    return next()

} 

export default validateId