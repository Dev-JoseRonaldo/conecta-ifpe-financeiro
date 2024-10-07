import { Controller, Get, Post, Body } from '@nestjs/common';

import { PaymentListService } from './payment-list.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentList } from '@prisma/client';

@ApiTags('payment-list') // Agrupando rotas de Payment List
@Controller('payment-list')
export class PaymentListController {
  constructor(private readonly paymentListService: PaymentListService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova lista de pagamento' })
  @ApiResponse({
    status: 201,
    description: 'Lista de pagamento criada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos fornecidos.',
  })
  async create(@Body() paymentListData: PaymentList) {
    return await this.paymentListService.create(paymentListData);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todas as listas de pagamento' })
  @ApiResponse({
    status: 200,
    description: 'Listas de pagamento retornadas com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhuma lista de pagamento encontrada.',
  })
  async findAll(): Promise<PaymentList[]> {
    return this.paymentListService.findAllWithStudents();
  }
}
