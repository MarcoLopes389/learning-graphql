import { EmptyBookNameException } from '../exceptions/empty-book-name.exception';
import { EmptyBookPublicationDateException } from '../exceptions/empty-book-publication-date.exception';
import { InvalidBookPublicationDateException } from '../exceptions/invalid-book-publication-date.exception';

export class Book {
  private id: string;
  private name: string;
  private publicationDate: Date;

  constructor(id: string, name: string, publicationDate: Date) {
    if (!name) {
      throw new EmptyBookNameException();
    }

    if (!publicationDate) {
      throw new EmptyBookPublicationDateException();
    }

    if (publicationDate >= new Date()) {
      throw new InvalidBookPublicationDateException();
    }

    this.id = id;
    this.name = name;
    this.publicationDate = publicationDate;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getPublicationDate() {
    return this.publicationDate;
  }

  public setName(name: string) {
    if (!name) {
      throw new EmptyBookNameException();
    }

    this.name = name;
  }

  public setPublicationDate(publicationDate: Date) {
    if (!publicationDate) {
      throw new EmptyBookPublicationDateException();
    }

    if (publicationDate >= new Date()) {
      throw new InvalidBookPublicationDateException();
    }

    this.publicationDate = publicationDate;
  }
}
