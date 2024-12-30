import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { FindBooksUseCase } from 'src/domain/use-cases/find-books.use-case';
import { Book } from '../types/book.type';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly findBooksUsecase: FindBooksUseCase) {}

  @Query(() => [Book])
  async findAll() {
    return await this.findBooksUsecase.execute();
  }
}
