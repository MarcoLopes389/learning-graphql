export class EmptyBookPublicationDateException extends Error {
  constructor() {
    super('A data de publicação não pode ser nula');
  }
}
