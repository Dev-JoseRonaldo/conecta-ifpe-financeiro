import { Controller, Get, Post, Body } from '@nestjs/common';

import { PaymentList } from './entities/payment-list.entity';
import { PaymentListService } from './payment-list.service';

@Controller('payment-list')
export class PaymentListController {
  constructor(private readonly paymentListService: PaymentListService) {}

  @Post()
  async create(@Body() paymentListData: Partial<PaymentList>) {
    return await this.paymentListService.create(paymentListData);
  }

  @Get()
  async findAll(): Promise<PaymentList[]> {
    return this.paymentListService.findAllWithStudents();
  }
}
