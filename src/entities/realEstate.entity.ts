import {
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
    NumericType,
} from 'typeorm';
import Addresses from './adresses.entity';
import Category from './categories.entity';
import Schedule from './schedules.entity';
  
@Entity('real_estate')
class RealEstate {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: string | number

    @Column({ type: 'integer' })
    size: number | string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToOne(() => Addresses)
    @JoinColumn()
    address: Addresses

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]

}

export default RealEstate 