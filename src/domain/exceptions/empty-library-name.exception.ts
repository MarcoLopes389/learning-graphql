export class EmptyLibraryNameException extends Error {
  constructor() {
    super('Nome da biblioteca não pode ser nulo');
  }
}
