import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PaymentStatement } from './entities/payment-statement.entity';
import { PaymentStatementService } from './payment-statement.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('payment-statements') // Agrupando rotas de Payment Statement
@Controller('payment-statements')
export class PaymentStatementController {
  constructor(
    private readonly paymentStatementService: PaymentStatementService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo extrato de pagamento' })
  @ApiResponse({
    status: 201,
    description: 'Extrato de pagamento criado com sucesso.',
  })
  async create(@Body() paymentStatementData: Partial<PaymentStatement>) {
    return await this.paymentStatementService.create(paymentStatementData);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os extratos de pagamento' })
  @ApiResponse({
    status: 200,
    description: 'Extratos de pagamento retornados com sucesso.',
    type: [PaymentStatement],
  })
  async findAll(): Promise<PaymentStatement[]> {
    return this.paymentStatementService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um extrato de pagamento por ID' })
  @ApiResponse({
    status: 200,
    description: 'Extrato de pagamento encontrado com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Extrato de pagamento não encontrado.',
  })
  async findOne(@Param('id') id: number): Promise<PaymentStatement> {
    return this.paymentStatementService.findOne(id);
  }
}
