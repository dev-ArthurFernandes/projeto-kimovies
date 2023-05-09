import {
    BeforeInsert,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('real_state')
class RealState{

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
    
}

export default RealState