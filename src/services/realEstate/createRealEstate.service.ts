import { AppError } from "../../AppError";
import { IAddressesRequest, ICategory } from "../../interfaces";
import { IRealEstate } from "../../interfaces/realEstate.interfaces";
import { addresssesRepo, categoryRepo, realEstateRepo } from "../../repositories";
import { RealEstateSchema } from "../../schemas";


const createRealEstateService = async (payload: any): Promise<IRealEstate> => {

    const address: IAddressesRequest = payload.address

    const category: ICategory | null= await categoryRepo.findOneBy({id: payload.category})

    if(!category){
        throw new AppError('Category not found', 404)
    }

    const newAddress = addresssesRepo.create({
        ...address
    })

    await addresssesRepo.save(newAddress)

    const newRealEstate = realEstateRepo.create({
        ...payload,
        address: newAddress,
        category: category
    })

    return RealEstateSchema.parse(newRealEstate)

}

export default createRealEstateService