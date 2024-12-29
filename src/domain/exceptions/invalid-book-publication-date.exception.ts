export class InvalidBookPublicationDateException extends Error {
  constructor() {
    super('Data de publicação inválida');
  }
}
