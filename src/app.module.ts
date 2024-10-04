import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentListModule } from './payment-list/payment-list.module';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'conecta_ifpe_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PaymentListModule,
    StudentModule,
  ],
  providers: [StudentService],
})
export class AppModule {}
