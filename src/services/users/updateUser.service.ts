import { IUser, IUserResponse, IUserUpdateRequest } from '../../interfaces';
import { userRepo } from '../../repositories';
import { UserResponseSchema } from '../../schemas';

const updateUserService = async (userId: number, payload: any): Promise<IUserResponse> => {
	
	const oldUser: IUser | null= await userRepo.findOneBy({ id: userId})
	
	const newUser = userRepo.create({
        ...oldUser,
        ...payload
    })
	
	await userRepo.save(newUser)

    return UserResponseSchema.parse(newUser)
}

export default updateUserService