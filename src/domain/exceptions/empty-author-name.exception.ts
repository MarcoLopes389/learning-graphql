export class EmptyAuthorNameException extends Error {
  constructor() {
    super('É necessário informar um nome válido para o autor');
  }
}
