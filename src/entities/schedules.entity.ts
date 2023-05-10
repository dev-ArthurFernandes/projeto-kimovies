import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm'
import RealEstate from './real_estate.entity'
import Users from './user.entity'

@Entity('schedules')
class Schedules{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date'})
    date: Date

    @Column({ type: 'time'})
    hour: string

    @ManyToMany(() => Users, user => user.schedules)
    @JoinTable()
    users: Users[]

    @ManyToMany(() => RealEstate, realEstate => realEstate.schedules)
    @JoinTable()
    realEstates: RealEstate[]

}

export default Schedules