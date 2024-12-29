export class EmptyUserNameException extends Error {
  constructor() {
    super('Nome do usuário não pode ser nulo');
  }
}
