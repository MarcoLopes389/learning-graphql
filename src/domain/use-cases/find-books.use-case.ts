import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class FindBooksUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute() {
    return await this.bookRepository.findAll();
  }
}
