import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('schedules')
class Schedules{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date'})
    date: Date

    @Column({ type: 'time'})
    hour: string
}

export default Schedules