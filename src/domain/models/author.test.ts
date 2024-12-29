import { randomUUID } from 'crypto';
import { EmptyAuthorNameException } from '../exceptions/empty-author-name.exception';
import { Author } from './author';
import { EmptyAuthorBiographyException } from '../exceptions/empty-author-biography.exception';
import { TooShortAuthorBiographyException } from '../exceptions/too-short-author-biography.exception';
import { MIN_AUTHOR_BIOGRAPHY_LENGTH } from '../consts';

describe('Author instance tests', () => {
  it('should throw an EmptyAuthorNameException if I try to instanciate an author with a null name', () => {
    const id = randomUUID();
    const name = null;
    const biography = '-'.repeat(MIN_AUTHOR_BIOGRAPHY_LENGTH);

    expect(() => new Author(id, name, biography)).toThrow(
      EmptyAuthorNameException,
    );
  });

  it('should throw an EmptyAuthorNameException if I try to set the author name with a null value', () => {
    const id = randomUUID();
    const name = 'Agatha';
    const biography = '-'.repeat(MIN_AUTHOR_BIOGRAPHY_LENGTH);

    const author = new Author(id, name, biography);

    expect(() => author.setName(null)).toThrow(EmptyAuthorNameException);
  });

  it('should throw an EmptyAuthorBiographyException if I try to instanciate an author with a null biography', () => {
    const id = randomUUID();
    const name = 'Agatha';
    const biography = null;

    expect(() => new Author(id, name, biography)).toThrow(
      EmptyAuthorBiographyException,
    );
  });

  it('should throw an EmptyAuthorBiographyException if I try to set the author biography with a null value', () => {
    const id = randomUUID();
    const name = 'Agatha';
    const biography = '-'.repeat(MIN_AUTHOR_BIOGRAPHY_LENGTH);

    const author = new Author(id, name, biography);

    expect(() => author.setBiography(null)).toThrow(
      EmptyAuthorBiographyException,
    );
  });

  it('should throw an TooShortAuthorBiographyException if I try to instanciate an author with a short biography', () => {
    const id = randomUUID();
    const name = 'Agatha';
    const biography = '-'.repeat(MIN_AUTHOR_BIOGRAPHY_LENGTH - 1);

    expect(() => new Author(id, name, biography)).toThrow(
      TooShortAuthorBiographyException,
    );
  });

  it('should throw an TooShortAuthorBiographyException if I try to the author biography with a short text', () => {
    const id = randomUUID();
    const name = 'Agatha';
    const biography = '-'.repeat(MIN_AUTHOR_BIOGRAPHY_LENGTH);
    const shortBiography = biography.slice(-1);

    const author = new Author(id, name, biography);

    expect(() => author.setBiography(shortBiography)).toThrow(
      TooShortAuthorBiographyException,
    );
  });

  it('should getters returns the name values than I had pass to constructor', () => {
    const id = randomUUID();
    const name = 'Agatha';
    const biography = '-'.repeat(MIN_AUTHOR_BIOGRAPHY_LENGTH);

    const author = new Author(id, name, biography);

    expect(id).toEqual(author.getId());
    expect(name).toEqual(author.getName());
    expect(biography).toEqual(author.getBiography());
  });
});
