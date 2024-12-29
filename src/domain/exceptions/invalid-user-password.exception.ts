export class InvalidUserPasswordException extends Error {
  constructor() {
    super('Senha é inválida');
  }
}
