import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentListController } from './payment-list.controller';
import { PaymentListService } from './payment-list.service';
import { PaymentList } from './entities/payment-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentList])],
  controllers: [PaymentListController],
  providers: [PaymentListService],
})
export class PaymentListModule {}
