import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from './student.entity'; // ajuste o caminho conforme necessário

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

  @OneToMany(() => Student, (student) => student.paymentList, { cascade: true })
  students: Student[];
}
