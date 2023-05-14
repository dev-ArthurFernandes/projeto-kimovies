import { IUserResponse } from "../../interfaces";
import { userRepo } from "../../repositories";
import { UserResponseListSchema } from "../../schemas";

const listAllUsersService = async (): Promise<IUserResponse[]> => {

    const users = await userRepo.find()

    return UserResponseListSchema.parse(users)
}

export default listAllUsersService