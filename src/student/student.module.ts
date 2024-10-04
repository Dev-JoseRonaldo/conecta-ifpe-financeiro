import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity'; // ajuste o caminho conforme necessário
import { StudentService } from './student.service'; // se você tiver um StudentService

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService], // se você tiver um StudentService
  exports: [TypeOrmModule], // Exportando o TypeOrmModule para que o repositório possa ser acessado em outros módulos
})
export class StudentModule {}
