export class EmptyUserEmailException extends Error {
  constructor() {
    super('Email do usuário não pode ser nulo');
  }
}
