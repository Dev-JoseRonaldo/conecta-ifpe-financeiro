import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PaymentList } from './payment-list.entity'; // ajuste o caminho conforme necessário

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  bank: string;

  @Column()
  accountNumber: string;

  @ManyToOne(() => PaymentList, (paymentList) => paymentList.students)
  paymentList: PaymentList;
}
