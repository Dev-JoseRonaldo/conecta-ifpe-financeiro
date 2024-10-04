import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentList } from './entities/payment-list.entity';

@Injectable()
export class PaymentListService {
  constructor(
    @InjectRepository(PaymentList)
    private readonly paymentListRepository: Repository<PaymentList>,
  ) {}

  async create(paymentListData: Partial<PaymentList>): Promise<PaymentList> {
    const paymentList = this.paymentListRepository.create(paymentListData);
    return await this.paymentListRepository.save(paymentList);
  }

  async findAllWithStudents(): Promise<PaymentList[]> {
    return await this.paymentListRepository.find({ relations: ['students'] });
  }
}
