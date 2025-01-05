import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';
import { Book } from '../models/book';
import { DuplicatedBookException } from '../exceptions/duplicated-book.exception';
import { CreateBookRequestDto } from '../dtos/create-book-request.dto';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(data: CreateBookRequestDto) {
    const existingBook = await this.bookRepository.findOneByName(
      data.getName(),
    );

    if (existingBook) {
      throw new DuplicatedBookException();
    }

    const book = new Book(null, data.getName(), data.getPublicationDate());

    return await this.bookRepository.create(book);
  }
}
