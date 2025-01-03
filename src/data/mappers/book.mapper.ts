import { Book } from 'src/domain/models/book';

export class BookMapper {
  constructor() {}

  toBooks(json: any[]) {
    return json.map((item) => this.toBook(item));
  }

  toBook(json: any) {
    return new Book(json.id, json.name, json.publicationDate);
  }
}
