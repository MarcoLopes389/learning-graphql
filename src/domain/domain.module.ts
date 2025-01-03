import { Module } from '@nestjs/common';
import { BookRepository } from './repositories/book.repository';
import { FindBooksUseCase } from './use-cases/find-books.use-case';
import { DataModule } from 'src/data/data.module';
import { CreateBookUseCase } from './use-cases/create-book.use-case';

@Module({
  imports: [DataModule],
  providers: [BookRepository, FindBooksUseCase, CreateBookUseCase],
  exports: [FindBooksUseCase, CreateBookUseCase],
})
export class DomainModule {}
