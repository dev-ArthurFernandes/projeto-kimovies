import {
    BeforeInsert,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm'
import RealEstate from './real_estate.entity'

@Entity('addresses')
class Addresses{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45})
    street: string

    @Column({ type: 'varchar', length: 8})
    zipCode: string

    @Column({ type: 'varchar', length: 7, nullable: true})
    number: string | null | undefined

    @Column({ type: 'varchar', length: 20})
    city: string

    @Column({ type: 'varchar', length: 2})
    state: string

    @BeforeInsert()
    changeEntries(){
        this.state = this.state.toUpperCase()
        this.street = this.street.toLocaleLowerCase()
        this.city = this.city.toLocaleLowerCase()
    }

    @OneToOne(() => RealEstate)
    realEstate: RealEstate
}

export default Addresses