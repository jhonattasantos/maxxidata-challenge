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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'professionals' })
export class Professional {
  @ApiProperty({
    example: 'c40b0bb9-7752-4341-911e-ea96328cac5d',
    description: 'id',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Fulano', description: 'name' })
  @Column()
  name: string;

  @ApiProperty({ example: '83988290715', description: 'telephone' })
  @Column()
  telephone: string;

  @ApiProperty({ example: 'fulano@email.com', description: 'email' })
  @Column()
  email: string;

  @ApiProperty({ example: true, description: 'situation' })
  @Column({ default: true })
  situation: boolean;

  @ApiProperty({ example: ProfessionalType, description: 'typeOfProfessional' })
  @ManyToOne(
    () => ProfessionalType,
    (typeOfProfessional) => typeOfProfessional.professionals,
    {
      nullable: false,
    },
  )
  typeOfProfessional: ProfessionalType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
