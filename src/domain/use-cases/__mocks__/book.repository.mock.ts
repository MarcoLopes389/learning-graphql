import { randomUUID } from 'crypto';
import { Book } from 'src/domain/models/book';

const date = new Date();

export const FIND_ALL_BOOK_REPOSITORY = [
  new Book(
    randomUUID(),
    'Harry Potter',
    new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
  ),
];

export class BookRepositoryMock {
  async findAll() {
    return FIND_ALL_BOOK_REPOSITORY;
  }
}
