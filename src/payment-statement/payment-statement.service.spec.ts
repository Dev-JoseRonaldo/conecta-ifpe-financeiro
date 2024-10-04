import { Test, TestingModule } from '@nestjs/testing';
import { PaymentStatementService } from './payment-statement.service';

describe('PaymentStatementService', () => {
  let service: PaymentStatementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentStatementService],
    }).compile();

    service = module.get<PaymentStatementService>(PaymentStatementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
