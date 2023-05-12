import { getRounds, hashSync } from 'bcryptjs';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  AfterLoad,
} from 'typeorm';
import Schedule from './schedules.entity';

@Entity('users')
class User{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'boolean', default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: string | undefined | null

    @OneToMany(() => Schedule, (schedules) => schedules.user)
    schedules: Schedule[]


    @BeforeInsert()
    @BeforeUpdate()
    verifyEntries() {
        this.email = this.email.toLowerCase()

        this.password = hashSync(this.password, 10)
    }

    

    @AfterLoad()
    turnUp(){
        this.name = this.name.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).toString().replaceAll(',',' ')
    }

}

export default User