import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentList {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  year: number;

  @ApiProperty()
  @Column()
  referenceMonth: number;

  @ApiProperty()
  @Column('decimal')
  amount: number;

  @ApiProperty()
  @Column('text', { array: true })
  students: string[];
}
