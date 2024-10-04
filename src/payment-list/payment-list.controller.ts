import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaymentList } from './entities/payment-list.entity';
import { PaymentListService } from './payment-list.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  async create(@Body() paymentListData: Partial<PaymentList>) {
    return await this.paymentListService.create(paymentListData);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todas as listas de pagamento' })
  @ApiResponse({
    status: 200,
    description: 'Listas de pagamento retornadas com sucesso.',
    type: [PaymentList],
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhuma lista de pagamento encontrada.',
  })
  async findAll(): Promise<PaymentList[]> {
    return this.paymentListService.findAllWithStudents();
  }
}
