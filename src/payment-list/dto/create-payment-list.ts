// create-payment-list.dto.ts
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreatePaymentListDto {
  @IsNumber()
  ano: number;

  @IsString()
  mesReferencia: string;

  @IsNumber()
  valorTotal: number;

  @IsArray()
  alunos: {
    nome_aluno: string;
    CPF_aluno: string;
    banco: string;
    contaCorrente: string;
  }[];
}
