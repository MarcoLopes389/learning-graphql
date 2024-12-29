import { MIN_AUTHOR_BIOGRAPHY_LENGTH } from '../consts';
import { EmptyAuthorBiographyException } from '../exceptions/empty-author-biography.exception';
import { EmptyAuthorNameException } from '../exceptions/empty-author-name.exception';
import { TooShortAuthorBiographyException } from '../exceptions/too-short-author-biography.exception';

export class Author {
  private id: string;
  private name: string;
  private biography: string;

  constructor(id: string, name: string, biography: string) {
    if (!name) {
      throw new EmptyAuthorNameException();
    }

    if (!biography) {
      throw new EmptyAuthorBiographyException();
    }

    if (biography.length < MIN_AUTHOR_BIOGRAPHY_LENGTH) {
      throw new TooShortAuthorBiographyException();
    }

    this.id = id;
    this.name = name;
    this.biography = biography;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getBiography() {
    return this.biography;
  }

  public setBiography(biography: string) {
    if (!biography) {
      throw new EmptyAuthorBiographyException();
    }

    if (biography.length < MIN_AUTHOR_BIOGRAPHY_LENGTH) {
      throw new TooShortAuthorBiographyException();
    }

    this.biography = biography;
  }

  public setName(name: string) {
    if (!name) {
      throw new EmptyAuthorNameException();
    }

    this.name = name;
  }
}
