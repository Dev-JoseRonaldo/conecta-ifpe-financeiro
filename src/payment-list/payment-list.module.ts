import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentListController } from './payment-list.controller';
import { PaymentListService } from './payment-list.service';
import { PaymentList } from './entities/payment-list.entity';
import { StudentModule } from '../student/student.module'; // ajuste o caminho conforme necessário

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentList]),
    StudentModule, // Importando o StudentModule
  ],
  controllers: [PaymentListController],
  providers: [PaymentListService],
})
export class PaymentListModule {}
