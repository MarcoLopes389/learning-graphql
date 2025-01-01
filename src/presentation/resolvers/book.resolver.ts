import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindBooksUseCase } from 'src/domain/use-cases/find-books.use-case';
import { Book } from '../types/book.type';
import { CreateBookArg } from '../args/create-book.arg';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly findBooksUsecase: FindBooksUseCase) {}

  @Query(() => [Book])
  async findAll() {
    return await this.findBooksUsecase.execute();
  }
}
