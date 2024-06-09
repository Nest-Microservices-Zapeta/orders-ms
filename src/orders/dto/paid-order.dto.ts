/* eslint-disable prettier/prettier */
import { IsString, IsUUID, IsUrl } from 'class-validator';

export class PaidOrderDto {
  @IsString()
  paymentId: string;

  @IsString()
  @IsUUID()
  orderId: string;

  @IsString()
  @IsUrl()
  receiptUrl: string;
}
