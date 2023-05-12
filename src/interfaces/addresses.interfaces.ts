import { z } from 'zod';
import { AddressesSchema, CreateAddressesSchema } from '../schemas';


type IAddresses = z.infer<typeof AddressesSchema>
type IAddressesRequest = z.infer<typeof CreateAddressesSchema>

export {
    IAddresses,
    IAddressesRequest
}