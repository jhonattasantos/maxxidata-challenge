import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ProfessionalType } from '../professional-type/professional-type.entity';

@Entity({ name: 'professionals' })
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column({ default: true })
  situation: boolean;

  @ManyToOne(() => ProfessionalType, (type) => type.professionals, {
    nullable: false,
  })
  type: ProfessionalType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
