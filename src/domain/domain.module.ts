import { Module } from '@nestjs/common';
import { BookRepository } from './repositories/book.repository';
import { FindBooksUseCase } from './use-cases/find-books.use-case';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [DataModule],
  providers: [BookRepository, FindBooksUseCase],
  exports: [FindBooksUseCase],
})
export class DomainModule {}
