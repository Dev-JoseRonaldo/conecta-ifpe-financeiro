import { PaymentList } from 'src/payment-list/entities/payment-list.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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
