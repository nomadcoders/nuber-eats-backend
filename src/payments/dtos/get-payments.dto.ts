import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Payment } from '../entities/payment.entity';

@ObjectType()
export class GetPaymentsOutput extends CoreOutput {
  @Field(type => [Payment], { nullable: true })
  payments?: Payment[];
}
