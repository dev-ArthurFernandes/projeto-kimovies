import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../AppError";
import { IUser, IUserResponse, IUserUpdateRequest } from "../../interfaces";
import { UserResponseSchema } from "../../schemas";

const updateUserService = async (payload: any, userId: number ): Promise<IUserResponse> => {

    delete payload.admin

    const userRepo = AppDataSource.getRepository(User);

    const userData: User | null = await userRepo.findOneBy({
        id: userId
    })

    const updateUsers = userRepo.create({...userData, ...payload })

    await userRepo.save(updateUsers);

    const returnUser: IUserResponse = UserResponseSchema.parse(updateUsers)

    return returnUser
}

export default updateUserService