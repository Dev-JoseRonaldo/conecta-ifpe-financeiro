import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(studentData: Student): Promise<Student> {
    return await this.prisma.student.create({
      data: studentData,
    });
  }

  async createMany(studentsData: Student[]): Promise<Student[]> {
    await this.prisma.student.createMany({
      data: studentsData,
    });

    const createdStudents = await this.prisma.student.findMany({
      where: {
        cpf: {
          in: studentsData.map((student) => student.cpf),
        },
      },
    });

    return createdStudents;
  }

  async findAll(): Promise<Student[]> {
    return await this.prisma.student.findMany();
  }

  async findOne(id: number): Promise<Student> {
    return await this.prisma.student.findUnique({
      where: { id },
    });
  }

  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    return await this.prisma.student.update({
      where: { id },
      data: studentData,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.student.delete({
      where: { id },
    });
  }
}
