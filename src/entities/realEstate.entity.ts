import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToOne,
    JoinColumn,
    OneToMany,
  } from "typeorm";
  import Category from "./categories.entity";
  import Address from "./adress.entity";
  import Schedule from "./schedules.entity";
  
@Entity("real_estate")
class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number
  
    @Column({ type: "boolean", default: true })
    sold: boolean = false
  
    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string
  
    @Column({ type: "int", default: 0 })
    size: number = 0
  
    @CreateDateColumn({ type: "date" })
    createdAt: string
  
    @UpdateDateColumn({ type: "date" })
    updatedAt: string
  
    @ManyToOne(() => Category, (category) => category.realEstate, {
      nullable: true,
    })
    category: Category | undefined | null
  
    @OneToOne(() => Address)
    @JoinColumn()
    address: Address
  
    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[]
}
  
export default RealEstate 