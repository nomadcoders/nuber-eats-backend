import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Category } from '../entities/cetegory.entity';

@ArgsType()
export class CategoryInput {
  @Field(type => String)
  slug: string;
}

@ObjectType()
export class CategoryOutput extends CoreOutput {
  @Field(type => Category, { nullable: true })
  category?: Category;
}
