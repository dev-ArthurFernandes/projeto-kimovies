import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppError } from "../AppError";
import { userRepo } from "../repositories";

const validateId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const userRepoResult: User | null = await userRepo.findOneBy({
    id: Number(req.params.id)
  })

  if (!userRepoResult) {
    throw new AppError("User not found", 404)
  }

  return next()
}

export default validateId