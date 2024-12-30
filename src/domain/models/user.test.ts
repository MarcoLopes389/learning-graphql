import { randomUUID } from 'crypto';
import { User } from './user';
import { EmptyUserNameException } from '../exceptions/empty-user-name.exception';
import { EmptyUserEmailException } from '../exceptions/empty-user-email.exception';
import { InvalidUserEmailException } from '../exceptions/invalid-user-email.exception';
import { TooShortUserPasswordException } from '../exceptions/too-short-user-password.exception';
import { EmptyUserPasswordException } from '../exceptions/empty-user-password.exception';
import { InvalidUserPasswordException } from '../exceptions/invalid-user-password.exception';

describe('User instance tests', () => {
  it('should throw an EmptyUserNameException if I try to instanciate an user with a null name', () => {
    const id = randomUUID();
    const name = null;
    const email = 'marco@example.com';
    const password = 'Marco123#';

    expect(() => new User(id, name, email, password)).toThrow(
      EmptyUserNameException,
    );
  });

  it('should throw an EmptyUserNameException if I try to set the user name with a null value', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';

    const user = new User(id, name, email, password);

    expect(() => user.setName(null)).toThrow(EmptyUserNameException);
  });

  it('should throw an EmptyUserEmailException if I try to instanciate an user with a null email', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = null;
    const password = 'Marco123#';

    expect(() => new User(id, name, email, password)).toThrow(
      EmptyUserEmailException,
    );
  });

  it('should throw an EmptyUserEmailException if I try to set the user email with a null value', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';

    const user = new User(id, name, email, password);

    expect(() => user.setEmail(null)).toThrow(EmptyUserEmailException);
  });

  it('should throw an InvalidUserEmailException if I try to instanciate an user with an invalid email', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco.example.com';
    const password = 'Marco123#';

    expect(() => new User(id, name, email, password)).toThrow(
      InvalidUserEmailException,
    );
  });

  it('should throw an InvalidUserEmailException if I try to set the user email with an invalid value', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const invalidEmail = 'marco.exmaple.com';
    const password = 'Marco123#';

    const user = new User(id, name, email, password);

    expect(() => user.setEmail(invalidEmail)).toThrow(
      InvalidUserEmailException,
    );
  });

  it('should throw an TooShortUserPasswordException if I try to instanciate an user with a password less than 8 chars', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco1#';

    expect(() => new User(id, name, email, password)).toThrow(
      TooShortUserPasswordException,
    );
  });

  it('should throw an TooShortUserPasswordException if I try to set the user password with a value less than 8 chars', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';
    const shortPassword = 'Marco1#';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(shortPassword)).toThrow(
      TooShortUserPasswordException,
    );
  });
  it('should throw an EmptyUserPasswordException if I try to instanciate an user with a null password', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = null;

    expect(() => new User(id, name, email, password)).toThrow(
      EmptyUserPasswordException,
    );
  });

  it('should throw an EmptyUserPasswordException if I try to set the user password with a null value', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(null)).toThrow(EmptyUserPasswordException);
  });

  it('should throw an InvalidUserPasswordException if I try to instanciate an user with a password without a special char', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123';

    expect(() => new User(id, name, email, password)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to set the user password with a value without a special char', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';
    const newPassword = 'Marco123';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(newPassword)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to instanciate an user with a password without a upper case letter', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'marco123#';

    expect(() => new User(id, name, email, password)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to instanciate an user with a password without a lower case letter', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'MARCO123#';

    expect(() => new User(id, name, email, password)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to set the user password with a value without a a number', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';
    const newPassword = 'MARCooO#';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(newPassword)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to set the user password with a value without a upper case letter', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';
    const newPassword = 'marco12#';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(newPassword)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to set the user password with a value without a lower case letter', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';
    const newPassword = 'MARCOO12#';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(newPassword)).toThrow(
      InvalidUserPasswordException,
    );
  });

  it('should throw an InvalidUserPasswordException if I try to set the user password with a value without a number', () => {
    const id = randomUUID();
    const name = 'Marco';
    const email = 'marco@example.com';
    const password = 'Marco123#';
    const newPassword = 'MARCOoo#';

    const user = new User(id, name, email, password);

    expect(() => user.setPassword(newPassword)).toThrow(
      InvalidUserPasswordException,
    );
  });
});
