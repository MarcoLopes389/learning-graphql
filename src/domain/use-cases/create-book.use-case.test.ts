import { Test } from '@nestjs/testing';
import { BookRepository } from '../repositories/book.repository';
import { BookRepositoryMock } from './__mocks__/book.repository.mock';
import { CreateBookUseCase } from './create-book.use-case';
import { DuplicatedBookException } from '../exceptions/duplicated-book.exception';
import { CreateBookRequestDto } from '../dtos/create-book-request.dto';

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

    const dto = new CreateBookRequestDto('Teste', new Date());

    try {
      await createBookUseCase.execute(dto);
    } catch (error) {
      expect(error).toBeInstanceOf(DuplicatedBookException);
    }

    expect(findOneByName).toHaveBeenCalled();
    expect(findOneByName).toHaveBeenCalledTimes(1);
  });
});
