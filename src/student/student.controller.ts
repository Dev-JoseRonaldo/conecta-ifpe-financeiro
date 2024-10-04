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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar um novo aluno' })
  @ApiResponse({ status: 201, description: 'Aluno criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() studentData: Student) {
    return this.studentService.create(studentData);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Adicionar múltiplos alunos' })
  @ApiResponse({ status: 201, description: 'Alunos criados com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async createMany(
    @Body() studentsData: Partial<Student>[],
  ): Promise<Student[]> {
    return await this.studentService.createMany(studentsData);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os alunos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de alunos retornada com sucesso.',
    type: [Student],
  })
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar aluno por ID' })
  @ApiResponse({
    status: 200,
    description: 'Aluno encontrado com sucesso.',
    type: Student,
  })
  @ApiResponse({ status: 404, description: 'Aluno não encontrado.' })
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar aluno por ID' })
  @ApiResponse({
    status: 200,
    description: 'Aluno atualizado com sucesso.',
    type: Student,
  })
  @ApiResponse({ status: 404, description: 'Aluno não encontrado.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async update(@Param('id') id: number, @Body() studentData: Partial<Student>) {
    return this.studentService.update(id, studentData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar aluno por ID' })
  @ApiResponse({ status: 200, description: 'Aluno deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aluno não encontrado.' })
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
