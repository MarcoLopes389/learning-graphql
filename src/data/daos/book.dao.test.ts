import { Test } from '@nestjs/testing';
import { Neo4jAdapterMock } from './__mocks__/neo4j.adapter.mock';
import { BookDao } from './book.dao';
import { Neo4jAdapter } from '../adapters/neo4j.adapter';
import { BookMapper } from '../mappers/book.mapper';
import { BookMapperMock } from './__mocks__/book.mapper.mock';
import { randomUUID } from 'crypto';
import { Book } from 'src/domain/models/book';

describe('BookDao tests', () => {
  let bookDao: BookDao;

  beforeEach(() => jest.clearAllMocks());

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookDao, Neo4jAdapter, BookMapper],
    })
      .overrideProvider(Neo4jAdapter)
      .useClass(Neo4jAdapterMock)
      .overrideProvider(BookMapper)
      .useClass(BookMapperMock)
      .compile();

    bookDao = moduleRef.get(BookDao);
  });

  it('should call Neo4jAdapter book function and all function', async () => {
    const book = jest.spyOn(Neo4jAdapterMock.prototype, 'book');
    const all = jest.spyOn(Neo4jAdapterMock.prototype, 'all');

    await bookDao.findAll();

    expect(book).toHaveBeenCalled();
    expect(book).toHaveBeenCalledTimes(1);
    expect(all).toHaveBeenCalled();
    expect(all).toHaveBeenCalledTimes(1);
  });

  it('should call Neo4jAdapter book function and create function', async () => {
    const book = jest.spyOn(Neo4jAdapterMock.prototype, 'book');
    const create = jest.spyOn(Neo4jAdapterMock.prototype, 'create');

    const date = new Date();

    await bookDao.create(
      new Book(
        randomUUID(),
        'Harry Potter',
        new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
      ),
    );

    expect(book).toHaveBeenCalled();
    expect(book).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalled();
    expect(create).toHaveBeenCalledTimes(1);
  });

  it('should call Neo4jAdapter book function and first function', async () => {
    const book = jest.spyOn(Neo4jAdapterMock.prototype, 'book');
    const first = jest.spyOn(Neo4jAdapterMock.prototype, 'first');

    const name = 'Teste';

    await bookDao.findOneByName(name);

    expect(book).toHaveBeenCalled();
    expect(book).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('name', name);
  });
});
