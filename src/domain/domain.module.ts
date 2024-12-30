import { Module } from '@nestjs/common';
import { BookRepository } from './repositories/book.repository';
import { FindBooksUseCase } from './use-cases/find-books.use-case';

@Module({
  providers: [BookRepository, FindBooksUseCase],
})
export class DomainModule {}
