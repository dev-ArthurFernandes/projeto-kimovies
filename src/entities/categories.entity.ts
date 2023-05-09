import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('categories')
class Categories{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45, unique: true})
    name: string
}

export default Categories