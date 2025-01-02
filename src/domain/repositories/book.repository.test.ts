import { BookDao } from '../../data/daos/book.dao';
import { BookRepository } from './book.repository';
import { Test } from '@nestjs/testing';
import { BookDaoMock } from './__mocks__/book.dao.mock';

describe('Book Repository Tests', () => {
  let bookRepository: BookRepository;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository],
    })
      .overrideProvider(BookDao)
      .useClass(BookDaoMock)
      .compile();

    bookRepository = moduleRef.get(BookRepository);
  });

  it('should call BookDao findAll on call findAll', () => {
    const findAll = jest.spyOn(BookDaoMock.prototype, 'findAll');

    bookRepository.findAll();

    expect(findAll).toHaveBeenCalled();
    expect(findAll).toHaveBeenCalledTimes(1);
  });
});
