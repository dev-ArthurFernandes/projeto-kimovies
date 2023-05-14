import { Address, RealEstate } from "../../entities";
import { AppError } from "../../AppError";
import { IAddresses, IRealEstate, IRealEstateRequest } from "../../interfaces";
import { addresssesRepo, categoryRepo, realEstateRepo } from "../../repositories";
import { RealEstateRequestSchema } from "../../schemas";

const createRealEstateService = async ( payload: IRealEstateRequest): Promise<RealEstate> => {
  
    const { number, city, state, street, zipCode } = payload.address;

    if (number) {
        const validdAddress: Address | null = await addresssesRepo.findOneBy({
        city: city,
        number: number,
        state: state,
        street: street,
        zipCode: zipCode,
        })

        if (validdAddress) {
        throw new AppError("Address already exists", 409)
        }
    }

    let category

    if (payload.categoryId) {
        category = await categoryRepo.findOneBy({
        id: payload.categoryId,
        })

        if (!category) {
        throw new AppError("Category not Found.", 404)
        }
    }

    const address: IAddresses = addresssesRepo.create(payload.address)
    const createAddress: Address = await addresssesRepo.save(address)

    const newEstate: IRealEstateRequest = RealEstateRequestSchema.parse(payload)

    if (category) {
        const estate: IRealEstate = realEstateRepo.create({
        ...newEstate,
        address: { ...createAddress },
        category: category,
        });

        const createdRealEstate: RealEstate = await realEstateRepo.save(estate)

        return createdRealEstate;
    } else {
        const estate: IRealEstate = realEstateRepo.create({
        ...newEstate,
        address: { ...createAddress },
        });
        const createdRealEstate: RealEstate = await realEstateRepo.save(estate)

        return createdRealEstate
    }
}

export default createRealEstateService