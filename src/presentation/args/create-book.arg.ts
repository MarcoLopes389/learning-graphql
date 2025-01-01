import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateBookArg {
  @Field()
  name: string;

  @Field()
  publicationDate: string;
}
