import {
    BeforeInsert,
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm'
import Addresses from './addresses.entity'
import Category from './categories.entity'
import Schedules from './schedules.entity'

@Entity('real_state')
class RealEstate{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: "0"})
    value: string

    @Column({ type: 'integer'})
    size: number

    @Column({ type: 'date'})
    createdAt: Date

    @Column({ type: 'date'})
    updatedAt: Date

    @BeforeInsert()
    insertDate(){
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    @ManyToMany(() => Schedules, (schedule) => schedule.realEstates)
    schedules: Schedules

    @OneToOne(() => Addresses)
    @JoinColumn()
    Address: Addresses

    @OneToOne(() => Category)
    @JoinColumn()
    categories: Category
}

export default RealEstate