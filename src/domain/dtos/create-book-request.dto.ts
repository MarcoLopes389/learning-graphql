export class CreateBookRequestDto {
  private name: string;
  private publicationDate: Date;

  constructor(name: string, publicationDate: Date) {
    this.name = name;
    this.publicationDate = publicationDate;
  }

  public getName() {
    return this.name;
  }

  public getPublicationDate() {
    return this.publicationDate;
  }
}
