export class EmptyLibraryUserException extends Error {
  constructor() {
    super('A biblioteca precisa pertencer a um usuário');
  }
}
