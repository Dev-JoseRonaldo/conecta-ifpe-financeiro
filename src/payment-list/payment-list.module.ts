import { Module } from '@nestjs/common';
import { PaymentListController } from './payment-list.controller';
import { PaymentListService } from './payment-list.service';
import { StudentModule } from '../student/student.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [StudentModule],
  controllers: [PaymentListController],
  providers: [PaymentListService, PrismaService],
})
export class PaymentListModule {}
