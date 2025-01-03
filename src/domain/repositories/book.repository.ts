import { Injectable } from '@nestjs/common';
import { BookDao } from 'src/data/daos/book.dao';
import { Book } from '../models/book';

@Injectable()
export class BookRepository {
  constructor(private readonly bookDao: BookDao) {}

  async create(book: Book) {
    return await this.bookDao.create(book);
  }

  async findAll() {
    return await this.bookDao.findAll();
  }

  async findOneByName(name: string) {
    return await this.bookDao.findOneByName(name);
  }
}
