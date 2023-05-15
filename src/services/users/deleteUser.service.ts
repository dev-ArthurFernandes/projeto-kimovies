import { userRepo } from "../../repositories"



const deleteUserService = async (id: number): Promise<void> => {

    const user = await userRepo.findOneBy({id: id})

    await userRepo.softRemove(user!)

}

export default deleteUserService