import { BookDao } from '../../data/daos/book.dao';
import { BookRepository } from './book.repository';
import { Test } from '@nestjs/testing';
import { BookDaoMock, FIND_ALL_BOOK_DAO } from './__mocks__/book.dao.mock';

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
});
