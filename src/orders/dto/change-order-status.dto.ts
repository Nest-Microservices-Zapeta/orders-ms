/* eslint-disable prettier/prettier */
import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class ChangeOrderStatusDto {
  @IsUUID(4)
  id: string;
  
  @IsEnum(OrderStatusList , {
    message: `status must be one of the following: ${Object.values(OrderStatusList).join(', ')}`,
  })
  status: OrderStatus;
}
