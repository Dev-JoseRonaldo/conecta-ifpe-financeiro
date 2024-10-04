import { ApiProperty } from '@nestjs/swagger';
import { PaymentList } from 'src/payment-list/entities/payment-list.entity';
import { PaymentStatement } from 'src/payment-statement/entities/payment-statement.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

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

  @ManyToMany(
    () => PaymentStatement,
    (paymentStatement) => paymentStatement.students,
  )
  paymentStatements: PaymentStatement[];
}
