import { randomUUID } from 'crypto';
import { User } from './user';
import { Library } from './library';
import { EmptyLibraryNameException } from '../exceptions/empty-library-name.exception';
import { EmptyLibraryUserException } from '../exceptions/empty-library-user.exception';

describe('Library instance tests', () => {
  it('should throw an EmptyLibraryNameException if I try to instaciate a library with a null name', () => {
    const id = randomUUID();
    const name = null;
    const user = new User(
      randomUUID(),
      'Marco',
      'marco@example.com',
      'Marco123#',
    );

    expect(() => new Library(id, name, user)).toThrow(
      EmptyLibraryNameException,
    );
  });

  it('should throw an EmptyLibraryUserException if I try to instanciate a library with a null user', () => {
    const id = randomUUID();
    const name = 'Minhas ficções';
    const user = null;

    expect(() => new Library(id, name, user)).toThrow(
      EmptyLibraryUserException,
    );
  });
});
