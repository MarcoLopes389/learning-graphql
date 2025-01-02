import { randomUUID } from 'crypto';
import { Book } from 'src/domain/models/book';

export class BookDaoMock {
  async findAll() {
    const date = new Date();
    return [
      new Book(
        randomUUID(),
        'Harry Potter',
        new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
      ),
    ];
  }
}
