import { Test } from '@nestjs/testing';
import { Neo4jAdapterMock } from './__mocks__/neo4j.adapter.mock';
import { Neo4jAdapter } from '../adapters/neo4j.adapter';
import { BookMapper } from '../mappers/book.mapper';
import { BookMapperMock } from './__mocks__/book.mapper.mock';
import { randomUUID } from 'crypto';
import { UserDao } from './user.dao';
import { User } from 'src/domain/models/user';

describe('UserDao tests', () => {
  let userDao: UserDao;

  beforeEach(() => jest.clearAllMocks());

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [UserDao, Neo4jAdapter, BookMapper],
    })
      .overrideProvider(Neo4jAdapter)
      .useClass(Neo4jAdapterMock)
      .overrideProvider(BookMapper)
      .useClass(BookMapperMock)
      .compile();

    userDao = moduleRef.get(UserDao);
  });

  it('should call Neo4jAdapter book function and create function', async () => {
    const user = jest.spyOn(Neo4jAdapterMock.prototype, 'user');
    const create = jest.spyOn(Neo4jAdapterMock.prototype, 'create');

    await userDao.create(
      new User(randomUUID(), 'Marco', 'marco@exmaple.com', 'Marco123#'),
    );

    expect(user).toHaveBeenCalled();
    expect(user).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalled();
    expect(create).toHaveBeenCalledTimes(1);
  });

  it('should call Neo4jAdapter book function and first function', async () => {
    const book = jest.spyOn(Neo4jAdapterMock.prototype, 'book');
    const first = jest.spyOn(Neo4jAdapterMock.prototype, 'first');

    const email = 'marco@example.com';

    await userDao.findOneByEmail(email);

    expect(book).toHaveBeenCalled();
    expect(book).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('email', email);
  });

  it('should return null if first function returns falsy', async () => {
    jest
      .spyOn(Neo4jAdapterMock.prototype, 'first')
      .mockResolvedValue(false as any);

    const email = 'Teste';

    const result = await userDao.findOneByEmail(email);

    expect(result).toBeNull();
  });
});
