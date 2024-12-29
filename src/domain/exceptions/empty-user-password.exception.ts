export class EmptyUserPasswordException extends Error {
  constructor() {
    super('Senha não pode ser nula');
  }
}
