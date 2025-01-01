import { Inject, Injectable } from '@nestjs/common';
import { Driver } from 'neo4j-driver';
import { DB_INJECT } from '../db';
import { Book } from 'src/domain/models/book';
import { randomUUID } from 'crypto';

@Injectable()
export class BookDao {
  constructor(
    @Inject(DB_INJECT)
    private readonly db: Driver,
  ) {}

  async findAll() {
    const result = await this.db.session().run('MATCH (b:Book) return b');
    console.log(result.records.at(0));
    const date = new Date();
    return [
      new Book(
        randomUUID(),
        'Harry Potter',
        new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
      ),
    ];
  }

  async create(book: Book) {
    await this.db.session().run('CREATE (b:Book{name: $name, }) RETURN b', {
      name: book.getName(),
      publicationDate: book.getPublicationDate(),
    });
  }
}
