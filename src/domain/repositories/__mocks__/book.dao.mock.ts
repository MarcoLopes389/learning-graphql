/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { Book } from 'src/domain/models/book';

const date = new Date();

export const FIND_ALL_BOOK_DAO = [
  new Book(
    randomUUID(),
    'Harry Potter',
    new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
  ),
];

export const FIND_ONE_BY_NAME_BOOK_DAO = new Book(
  randomUUID(),
  'Harry Potter',
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
);

export class BookDaoMock {
  async findAll() {
    return FIND_ALL_BOOK_DAO;
  }

  async findOneByName(name: string) {
    return FIND_ONE_BY_NAME_BOOK_DAO;
  }

  async create(book: Book) {
    return FIND_ONE_BY_NAME_BOOK_DAO;
  }
}
