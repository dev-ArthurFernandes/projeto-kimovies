import { DataSource, Repository } from "typeorm";
import { IUser, IUserRequest, IUserResponse } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { UserResponseSchema } from "../../schemas";



const createUserService = async (payload: IUserRequest): Promise<IUserResponse> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: IUser = userRepo.create({...payload})

    await userRepo.save(user)

    const userReturn = UserResponseSchema.parse(user)

    return userReturn
} 

export default createUserService