import { Module } from '@nestjs/common';
import { PaymentListModule } from './payment-list/payment-list.module';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PaymentListModule, StudentModule, PrismaModule],
  providers: [StudentService, PrismaService],
})
export class AppModule {}
