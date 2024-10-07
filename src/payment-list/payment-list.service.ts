import { Injectable } from '@nestjs/common';
import { PaymentList } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentListService {
  constructor(private prisma: PrismaService) {}

  async create(paymentListData: PaymentList): Promise<PaymentList> {
    return await this.prisma.paymentList.create({
      data: paymentListData,
    });
  }

  async findAllWithStudents(): Promise<any[]> {
    const paymentLists = await this.prisma.paymentList.findMany({
      include: {
        students: true,
      },
    });
    return paymentLists;
  }
}
