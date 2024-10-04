import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentStatement } from './entities/payment-statement.entity';
import { Student } from 'src/student/entities/student.entity';

@Injectable()
export class PaymentStatementService {
  constructor(
    @InjectRepository(PaymentStatement)
    private readonly paymentStatementRepository: Repository<PaymentStatement>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(
    paymentStatementData: Partial<PaymentStatement>,
  ): Promise<PaymentStatement> {
    const paymentStatement =
      this.paymentStatementRepository.create(paymentStatementData);
    return await this.paymentStatementRepository.save(paymentStatement);
  }

  async findAll(): Promise<PaymentStatement[]> {
    return await this.paymentStatementRepository.find({
      relations: ['students'],
    });
  }

  async findOne(id: number): Promise<PaymentStatement> {
    return await this.paymentStatementRepository.findOne({
      where: { id },
      relations: ['students'],
    });
  }
}
