import { EmptyLibraryNameException } from '../exceptions/empty-library-name.exception';
import { EmptyLibraryUserException } from '../exceptions/empty-library-user.exception';
import { User } from './user';

export class Library {
  private id: string;
  private name: string;
  private user: User;

  constructor(id: string, name: string, user: User) {
    if (!name) {
      throw new EmptyLibraryNameException();
    }

    if (!user) {
      throw new EmptyLibraryUserException();
    }

    this.id = id;
    this.name = name;
    this.user = user;
  }
}
