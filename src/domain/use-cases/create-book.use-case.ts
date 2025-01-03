import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';
import { CreateBookArg } from 'src/presentation/args/create-book.arg';
import { Book } from '../models/book';
import { DuplicatedBookException } from '../exceptions/duplicated-book.exception';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(data: CreateBookArg) {
    const existingBook = await this.bookRepository.findOneByName(data.name);

    if (existingBook) {
      throw new DuplicatedBookException();
    }

    const book = new Book(null, data.name, new Date(data.publicationDate));

    return await this.bookRepository.create(book);
  }
}
