import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column()
  referenceMonth: number;

  @Column('decimal')
  amount: number;

  @Column('text', { array: true })
  students: string[];
}
