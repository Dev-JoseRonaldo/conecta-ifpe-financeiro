import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  CreateDateColumn,
  JoinTable,
} from 'typeorm';
import { Student } from 'src/student/entities/student.entity'; // ajuste o caminho conforme necessário

@Entity()
export class PaymentStatement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column()
  month: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Student, (student) => student.paymentStatements, {
    cascade: true,
  })
  @JoinTable()
  students: Student[];

  @Column({ default: false })
  hasPaymentError: boolean; // Campo para identificar se houve erro no pagamento
}
