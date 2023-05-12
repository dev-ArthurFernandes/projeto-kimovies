import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import {
    Address,
    Category,
    RealEstate,
    Schedule,
    User
} from './entities'


const userRepo: Repository<User> = AppDataSource.getRepository(User)

const addresssesRepo: Repository<Address> = AppDataSource.getRepository(Address)

const schedulesRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)

const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)


export {
    userRepo,
    addresssesRepo,
    schedulesRepo,
    realEstateRepo,
    categoryRepo
}