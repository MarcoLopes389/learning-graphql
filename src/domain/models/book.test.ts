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
      EmptyBookNameException,
    );

    expect(() => new Book(id, nameUndefiend, publicationDate)).toThrow(
      EmptyBookNameException,
    );
  });

  it('should throw an EmptyBookNameException if I try to set the book name with null or undefined value', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const date = new Date();
    const publicationDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1,
    );

    const book = new Book(id, name, publicationDate);

    expect(() => book.setName(null)).toThrow(EmptyBookNameException);
  });

  it('should throw an EmptyBookPublicationDateException if I try to instanciate a book with null or undefined publicationDate', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const publicationDateNull = null;
    const publicationDateUndefined = undefined;

    expect(() => new Book(id, name, publicationDateNull)).toThrow(
      EmptyBookPublicationDateException,
    );

    expect(() => new Book(id, name, publicationDateUndefined)).toThrow(
      EmptyBookPublicationDateException,
    );
  });

  it('should throw an EmptyBookPublicationDateException if I try to set the book publicationDate with null or undefined value', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const date = new Date();
    const publicationDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1,
    );

    const book = new Book(id, name, publicationDate);

    expect(() => book.setPublicationDate(null)).toThrow(
      EmptyBookPublicationDateException,
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
      InvalidBookPublicationDateException,
    );
  });

  it('should throw an InvalidBookPublicationDateException if I try to set the book with an publication date greater than current date', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const date = new Date();
    const publicationDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1,
    );
    const newPublicationDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
    );

    const book = new Book(id, name, publicationDate);

    expect(() => book.setPublicationDate(newPublicationDate)).toThrow(
      InvalidBookPublicationDateException,
    );
  });

  it('should throw an InvalidBookPublicationDateException if I try to instanciate a book with an publication date equals current date', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const publicationDate = new Date();

    expect(() => new Book(id, name, publicationDate)).toThrow(
      InvalidBookPublicationDateException,
    );
  });

  it('should throw an InvalidBookPublicationDateException if I try to set a book with an publication date equals current date', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const date = new Date();
    const publicationDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1,
    );

    const book = new Book(id, name, publicationDate);

    expect(() => book.setPublicationDate(date)).toThrow(
      InvalidBookPublicationDateException,
    );
  });

  it('should getters returns the values I had pass to constructor', () => {
    const id = randomUUID();
    const name = 'Harry Potter';
    const today = new Date();
    const publicationDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
    );

    const book = new Book(id, name, publicationDate);

    expect(id).toEqual(book.getId());
    expect(name).toEqual(book.getName());
    expect(publicationDate).toEqual(book.getPublicationDate());
  });
});
