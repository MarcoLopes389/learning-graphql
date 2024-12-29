export class InvalidUserEmailException extends Error {
  constructor() {
    super('Email é inválido');
  }
}
