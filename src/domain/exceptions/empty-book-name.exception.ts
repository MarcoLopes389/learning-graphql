export class EmptyBookNameException extends Error {
  constructor() {
    super('O nome do livro não pode ser nulo');
  }
}
