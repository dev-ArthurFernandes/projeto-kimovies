import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import {
    Addresses,
    Category,
    RealEstate,
    Schedule,
    User
} from './entities'


const userRepo: Repository<User> = AppDataSource.getRepository(User)

const addresssesRepo: Repository<Addresses> = AppDataSource.getRepository(Addresses)

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