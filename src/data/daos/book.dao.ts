import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/models/book';
import { Neo4jAdapter } from '../adapters/neo4j.adapter';
import { BookMapper } from '../mappers/book.mapper';

@Injectable()
export class BookDao {
  constructor(
    private readonly neo4jAdapter: Neo4jAdapter,
    private readonly bookMapper: BookMapper,
  ) {}

  async findAll() {
    const result = await this.neo4jAdapter.book().all();
    const json = await result.toJson();
    return this.bookMapper.toBooks(json as object[]);
  }

  async create(book: Book) {
    const result = await this.neo4jAdapter.book().create({
      name: book.getName(),
      publicationDate: book.getPublicationDate(),
    });
    const json = await result.toJson();
    return this.bookMapper.toBook(json);
  }

  async findOneByName(name: string) {
    const result = await this.neo4jAdapter.book().first('name', name);
    if (result) {
      const json = await result.toJson();
      return this.bookMapper.toBook(json);
    }

    return null;
  }
}
