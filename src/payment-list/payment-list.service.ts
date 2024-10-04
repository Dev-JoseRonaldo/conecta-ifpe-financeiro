import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { PaymentList } from './entities/payment-list.entity';
import { Student } from 'src/student/entities/student.entity';

@Injectable()
export class PaymentListService {
  constructor(
    @InjectRepository(PaymentList)
    private readonly paymentListRepository: Repository<PaymentList>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>, // Para buscar os alunos
  ) {}

  async create(paymentListData: Partial<PaymentList>): Promise<PaymentList> {
    const paymentList = this.paymentListRepository.create(paymentListData);
    return await this.paymentListRepository.save(paymentList);
  }

  async findAllWithStudents(): Promise<any[]> {
    const paymentLists = await this.paymentListRepository.find();

    return Promise.all(
      paymentLists.map(async (paymentList) => {
        const students = await this.studentRepository.find({
          where: {
            cpf: In(paymentList.students),
          },
        });
        return { ...paymentList, students };
      }),
    );
  }
}
