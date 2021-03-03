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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'professional_types' })
@Unique(['description'])
export class ProfessionalType {
  @ApiProperty({
    example: 'c40b0bb9-7752-4341-911e-ea96328cac5d',
    description: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Programador',
    description: 'description',
  })
  @Column()
  description: string;

  @ApiProperty({
    example: true,
    description: 'situation',
  })
  @Column({ default: true })
  situation: boolean;

  @OneToMany(
    () => Professional,
    (professional) => professional.typeOfProfessional,
  )
  professionals: Professional;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
