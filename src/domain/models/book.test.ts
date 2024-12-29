import { randomUUID } from 'crypto';
import { Book } from './book';
import { EmptyBookNameException } from '../exceptions/empty-book-name.exception';
import { EmptyBookPublicationDateException } from '../exceptions/empty-book-publication-date.exception';
import { InvalidBookPublicationDateException } from '../exceptions/invalid-book-publication-date.exception';

describe('Book instance tests', () => {
  it('should throw an EmptyBookNameException if I try to instanciate a book with null or undefined name', () => {
    const id = randomUUID();
    const nameNull = null;
    const nameUndefiend = undefined;
    const publicationDate = new Date();

    expect(() => new Book(id, nameNull, publicationDate)).toThrow(
      new EmptyBookNameException(),
    );

    expect(() => new Book(id, nameUndefiend, publicationDate)).toThrow(
      new EmptyBookNameException(),
    );
  });

  it('should throw an EmptyBookPublicationDateException if I try to instanciate a book with null or undefined publicationDate', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const publicationDateNull = null;
    const publicationDateUndefined = undefined;

    expect(() => new Book(id, name, publicationDateNull)).toThrow(
      new EmptyBookPublicationDateException(),
    );

    expect(() => new Book(id, name, publicationDateUndefined)).toThrow(
      new EmptyBookPublicationDateException(),
    );
  });

  it('should throw an InvalidBookPublicationDateException if I try to instanciate a book with an publication date greater than current date', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const date = new Date();
    const publicationDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
    );

    expect(() => new Book(id, name, publicationDate)).toThrow(
      new InvalidBookPublicationDateException(),
    );
  });

  it('should throw an InvalidBookPublicationDateException if I try to instanciate a book with an publication date equals current date', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const publicationDate = new Date();

    expect(() => new Book(id, name, publicationDate)).toThrow(
      new InvalidBookPublicationDateException(),
    );
  });
});
