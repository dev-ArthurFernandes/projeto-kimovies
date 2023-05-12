import { IAddresses, IAddressesRequest, ICategory, ICategoryRequest } from "../../interfaces";
import { IRealEstate, IRealEstateRequest } from "../../interfaces/realEstate.interfaces";
import { addresssesRepo, categoryRepo, realEstateRepo } from "../../repositories";




const createRealEstateService = async (payload: IRealEstateRequest): Promise<IRealEstate> => {

    const address: IAddressesRequest = payload.address

    const category: ICategoryRequest = payload.category

    const newAddress = addresssesRepo.create({
        ...address
    })

    await addresssesRepo.save(newAddress)

    const newCategory = categoryRepo.create({
        ...category
    })

    await categoryRepo.save(newCategory)

    payload.category = newCategory
    payload.address = newAddress





}