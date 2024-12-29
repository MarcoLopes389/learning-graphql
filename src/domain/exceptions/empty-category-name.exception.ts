export class EmptyCategoryNameException extends Error {
  constructor() {
    super('Nome na categoria precisa ser informado');
  }
}
