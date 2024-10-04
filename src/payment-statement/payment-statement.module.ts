import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentStatementController } from './payment-statement.controller';
import { PaymentStatementService } from './payment-statement.service';
import { PaymentStatement } from './entities/payment-statement.entity';
import { Student } from 'src/student/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentStatement, Student])],
  controllers: [PaymentStatementController],
  providers: [PaymentStatementService],
})
export class PaymentStatementModule {}
