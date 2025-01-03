export class DuplicatedBookException extends Error {
  constructor() {
    super('Livro já existente');
  }
}
