import { ApiProperty } from '@nestjs/swagger';
import { PaymentList } from 'src/payment-list/entities/payment-list.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Student {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  cpf: string;

  @ApiProperty()
  @Column()
  bank: string;

  @ApiProperty()
  @Column()
  accountNumber: string;

  @ApiProperty()
  @ManyToOne(() => PaymentList, (paymentList) => paymentList.students)
  paymentList: PaymentList;
}
