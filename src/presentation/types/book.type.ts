import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  publicationDate: string;
}
