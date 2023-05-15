import { RealEstate, User } from "../../entities";
import { AppError } from "../../AppError";
import { realEstateRepo, schedulesRepo, userRepo } from "../../repositories";
import { IScheduleRequest } from "../../interfaces";

const createSchedulesService = async (payload: IScheduleRequest, idUser: number, realEstateId: number ): Promise<string> => {
    
  const userRepoResult: User | null = await userRepo.findOneBy({
      id: idUser
  })

  if (!userRepoResult) {
      throw new AppError("User not found", 404)
  }

  const realEstateResult: RealEstate | null = await realEstateRepo.findOneBy({
    id: realEstateId
  })

  if (!realEstateResult) {
    throw new AppError("RealEstate not found", 404);
  }

  const schedulesRepoCreate= schedulesRepo.create({
    ...payload,
    realEstate: realEstateResult,
    user: userRepoResult,
  })

  await schedulesRepo.save(schedulesRepoCreate)

  return "message: 'Schedule created"
}

export default createSchedulesService