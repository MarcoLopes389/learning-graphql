export class TooShortUserPasswordException extends Error {
  constructor() {
    super('Senha é muito curta');
  }
}
