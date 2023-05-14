import { compare } from "bcryptjs";
import { AppError } from "../../AppError";
import { ILogin, IUser } from "../../interfaces";
import { userRepo } from "../../repositories";
import jwt from 'jsonwebtoken';


const loginService = async (payload: ILogin): Promise<string> => {

    const user: IUser | null = await userRepo.findOneBy({
        email: payload.email
    })
    
    if(!user || user.deletedAt){
        throw new AppError("Invalid credentials", 401)
    }
    
    const mathPassword = await compare(payload.password, user.password)

    if(!mathPassword){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign({

        admin: user.admin

    },String(process.env.SECRET_KEY),{

        expiresIn: '12h',
        subject: user.id.toString()
    })

    return token

}

export default loginService