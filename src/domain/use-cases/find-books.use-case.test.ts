import { Test } from '@nestjs/testing';
import { FindBooksUseCase } from './find-books.use-case';
import { BookRepository } from '../repositories/book.repository';
import {
  BookRepositoryMock,
  FIND_ALL_BOOK_REPOSITORY,
} from './__mocks__/book.repository.mock';

describe('FindBooksUseCase tests', () => {
  let findBooksUseCase: FindBooksUseCase;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindBooksUseCase, BookRepository],
    })
      .overrideProvider(BookRepository)
      .useClass(BookRepositoryMock)
      .compile();

    findBooksUseCase = moduleRef.get(FindBooksUseCase);
  });

  it('should call bookRepository findAll', async () => {
    const findAll = jest.spyOn(BookRepositoryMock.prototype, 'findAll');

    await findBooksUseCase.execute();

    expect(findAll).toHaveBeenCalled();
    expect(findAll).toHaveBeenCalledTimes(1);
  });

  it('should return same than bookRepository findAll', async () => {
    const result = await findBooksUseCase.execute();

    expect(result).toStrictEqual(FIND_ALL_BOOK_REPOSITORY);
  });
});
