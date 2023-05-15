import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./user.entity";
import RealEstate from "./realEstate.entity";

@Entity("schedules_users_properties")
class Schedule {
  
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({ type: "date" })
  date: string

  @Column({ type: "time" })
  hour: string

  @ManyToOne(() => User)
  user: User

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate
}

export default Schedule 