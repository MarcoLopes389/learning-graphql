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

export class BookDaoMock {
  async findAll() {
    return FIND_ALL_BOOK_DAO;
  }
}
