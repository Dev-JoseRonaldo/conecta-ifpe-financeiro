import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentData: Student) {
    return this.studentService.create(studentData);
  }

  @Post('batch')
  async createMany(
    @Body() studentsData: Partial<Student>[],
  ): Promise<Student[]> {
    return await this.studentService.createMany(studentsData);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() studentData: Partial<Student>) {
    return this.studentService.update(id, studentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
