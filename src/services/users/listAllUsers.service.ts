import { IUserResponse } from "../../interfaces";
import { userRepo } from "../../repositories";



const listAllUsersService = async (): Promise<IUserResponse[]> => {

    const users = await userRepo.find()

    return users
}

export default listAllUsersService