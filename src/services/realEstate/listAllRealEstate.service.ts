import { IRealEstate } from "../../interfaces";
import { realEstateRepo } from "../../repositories";


const listAllRealEsateService = async (): Promise<IRealEstate[]> => {

    const realEstates: IRealEstate[] = await realEstateRepo.find({
		relations: {
			address: true
		}
	})

    return realEstates
}

export default listAllRealEsateService