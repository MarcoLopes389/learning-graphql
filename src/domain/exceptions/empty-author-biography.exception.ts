export class EmptyAuthorBiographyException extends Error {
  constructor() {
    super('A biografia do autor não pode ser nula');
  }
}
