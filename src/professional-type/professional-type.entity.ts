import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Professional } from '../professional/professional.entity';

@Entity({ name: 'professional_types' })
@Unique(['description'])
export class ProfessionalType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column({ default: true })
  situation: boolean;

  @OneToMany(() => Professional, (professional) => professional.type)
  professionals: Professional;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
