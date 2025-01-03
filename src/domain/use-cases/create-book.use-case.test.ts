import { Test } from '@nestjs/testing';
import { BookRepository } from '../repositories/book.repository';
import { BookRepositoryMock } from './__mocks__/book.repository.mock';
import { CreateBookUseCase } from './create-book.use-case';
import { DuplicatedBookException } from '../exceptions/duplicated-book.exception';

describe('CreateBookUseCase tests', () => {
  let createBookUseCase: CreateBookUseCase;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateBookUseCase, BookRepository],
    })
      .overrideProvider(BookRepository)
      .useClass(BookRepositoryMock)
      .compile();

    createBookUseCase = moduleRef.get(CreateBookUseCase);
  });

  it('should throw DuplicatedBookException if I try to create an existing book', async () => {
    const findOneByName = jest.spyOn(
      BookRepositoryMock.prototype,
      'findOneByName',
    );

    try {
      await createBookUseCase.execute({
        name: 'Teste',
        publicationDate: new Date().toISOString(),
      });
    } catch (error) {
      expect(error).toBeInstanceOf(DuplicatedBookException);
    }

    expect(findOneByName).toHaveBeenCalled();
    expect(findOneByName).toHaveBeenCalledTimes(1);
  });
});
