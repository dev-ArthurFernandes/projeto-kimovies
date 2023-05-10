import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import Schedules from './schedules.entity';

@Entity('users')
class Users{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45})
    name: string

    @Column({ type: 'varchar', length: 45, unique: true})
    email: string

    @Column({ type: 'varchar', length: 120})
    password: string

    @Column({ type: 'boolean', default: false})
    admin: boolean

    @Column({ type: 'date'})
    createdAt: Date

    @Column({ type: 'date'})
    updatedAt: Date

    @Column({ type: 'date', nullable: true})
    deletedAt: Date | null | undefined

    @BeforeInsert()
    insertDate(){
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    @BeforeUpdate()
    changeUpdateDate(){
        this.updatedAt = new Date()
    }

    @ManyToMany(() => Schedules, schedule => schedule.users)
    schedules: Schedules
}

export default Users