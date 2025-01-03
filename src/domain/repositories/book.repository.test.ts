import { BookDao } from '../../data/daos/book.dao';
import { BookRepository } from './book.repository';
import { Test } from '@nestjs/testing';
import {
  BookDaoMock,
  FIND_ALL_BOOK_DAO,
  FIND_ONE_BY_NAME_BOOK_DAO,
} from './__mocks__/book.dao.mock';
import { Book } from '../models/book';
import { randomUUID } from 'crypto';

describe('Book Repository Tests', () => {
  let bookRepository: BookRepository;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, BookDao],
    })
      .overrideProvider(BookDao)
      .useClass(BookDaoMock)
      .compile();

    bookRepository = moduleRef.get(BookRepository);
  });

  it('should call BookDao findAll on call findAll', async () => {
    const findAll = jest.spyOn(BookDaoMock.prototype, 'findAll');

    await bookRepository.findAll();

    expect(findAll).toHaveBeenCalled();
    expect(findAll).toHaveBeenCalledTimes(1);
  });

  it('should return BookDao result on findAll', async () => {
    const result = await bookRepository.findAll();

    expect(result).toStrictEqual(FIND_ALL_BOOK_DAO);
  });

  it('should call BookDao findOneByName on call findOneByName', async () => {
    const findOneByName = jest.spyOn(BookDaoMock.prototype, 'findOneByName');
    const name = 'Teste';

    await bookRepository.findOneByName(name);

    expect(findOneByName).toHaveBeenCalled();
    expect(findOneByName).toHaveBeenCalledTimes(1);
    expect(findOneByName).toHaveBeenCalledWith(name);
  });

  it('should return BookDao findOneByName result on findOneByName', async () => {
    const name = 'Teste';

    const result = await bookRepository.findOneByName(name);

    expect(result).toStrictEqual(FIND_ONE_BY_NAME_BOOK_DAO);
  });

  it('should call BookDao create on create function', async () => {
    const create = jest.spyOn(BookDaoMock.prototype, 'create');
    const date = new Date();

    const book = new Book(
      randomUUID(),
      'Teste',
      new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
    );

    await bookRepository.create(book);

    expect(create).toHaveBeenCalled();
    expect(create).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalledWith(book);
  });

  it('should return BookDao create result create function', async () => {
    const date = new Date();

    const book = new Book(
      randomUUID(),
      'Teste',
      new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
    );

    const result = await bookRepository.create(book);

    expect(result).toStrictEqual(FIND_ONE_BY_NAME_BOOK_DAO);
  });
});
