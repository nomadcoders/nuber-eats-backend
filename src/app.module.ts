import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
