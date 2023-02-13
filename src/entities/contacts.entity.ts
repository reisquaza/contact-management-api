import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { User } from "./users.entity";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((type) => User)
  user: User;
}
