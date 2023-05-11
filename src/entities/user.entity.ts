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
    createdAt: Date

    @UpdateDateColumn({ type: 'date' })
    updatedAt: Date

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: Date | undefined | null

    @OneToMany(() => Schedule, (schedules) => schedules.user)
    schedules: Schedule[]


    @BeforeInsert()
    @BeforeUpdate()
    verifyEntries() {
        this.name = this.name.toLocaleLowerCase()
        this.email = this.email.toLocaleLowerCase()

        const encrypted = getRounds(this.password);

        if (!encrypted) {
            this.password = hashSync(this.password, 10);
        }
    }

    @AfterLoad()
    turnUp(){
        this.name = this.name.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).toString().replaceAll(',',' ')
    }

}

export default User