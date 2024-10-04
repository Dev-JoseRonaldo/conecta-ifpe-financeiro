import { Test, TestingModule } from '@nestjs/testing';
import { PaymentStatementController } from './payment-statement.controller';

describe('PaymentStatementController', () => {
  let controller: PaymentStatementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentStatementController],
    }).compile();

    controller = module.get<PaymentStatementController>(PaymentStatementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
