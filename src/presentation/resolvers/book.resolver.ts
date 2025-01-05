import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindBooksUseCase } from 'src/domain/use-cases/find-books.use-case';
import { Book } from '../types/book.type';
import { CreateBookUseCase } from 'src/domain/use-cases/create-book.use-case';
import { CreateBookRequestDto } from 'src/domain/dtos/create-book-request.dto';
import { CreateBookArg } from '../args/create-book.arg';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly findBooksUsecase: FindBooksUseCase,
    private readonly createBookUseCase: CreateBookUseCase,
  ) {}

  @Query(() => [Book])
  async findAll() {
    return await this.findBooksUsecase.execute();
  }

  @Mutation(() => Book)
  async create(@Args() args: CreateBookArg) {
    return await this.createBookUseCase.execute(
      new CreateBookRequestDto(args.name, new Date(args.publicationDate)),
    );
  }
}
