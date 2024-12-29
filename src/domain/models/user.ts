import { genSaltSync, hashSync } from 'bcrypt';
import { EmptyUserNameException } from '../exceptions/empty-user-name.exception';
import { EmptyUserEmailException } from '../exceptions/empty-user-email.exception';
import { EmptyUserPasswordException } from '../exceptions/empty-user-password.exception';
import { InvalidUserPasswordException } from '../exceptions/invalid-user-password.exception';
import { InvalidUserEmailException } from '../exceptions/invalid-user-email.exception';

export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(id: string, name: string, email: string, password: string) {
    if (!name) {
      throw new EmptyUserNameException();
    }

    if (!email) {
      throw new EmptyUserEmailException();
    }

    if (!password) {
      throw new EmptyUserPasswordException();
    }

    if (password.length < 8) {
      throw new InvalidUserPasswordException();
    }

    if (!email.includes('@')) {
      throw new InvalidUserEmailException();
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = hashSync(password, genSaltSync());
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public setName(name: string) {
    if (!name) {
      throw new EmptyUserNameException();
    }

    this.name = name;
  }

  public setEmail(email: string) {
    if (!email) {
      throw new EmptyUserEmailException();
    }

    if (!email.includes('@')) {
      throw new InvalidUserEmailException();
    }

    this.email = email;
  }

  public setPassword(password: string) {
    if (!password) {
      throw new EmptyUserPasswordException();
    }

    if (password.length < 8) {
      throw new InvalidUserPasswordException();
    }

    this.password = password;
  }
}
