import { MIN_AUTHOR_BIOGRAPHY_LENGTH } from '../consts';

export class TooShortAuthorBiographyException extends Error {
  constructor() {
    super(
      `A biografia do autor precisa ser maior que ${MIN_AUTHOR_BIOGRAPHY_LENGTH} caracteres`,
    );
  }
}
