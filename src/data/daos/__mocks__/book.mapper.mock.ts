export class BookMapperMock {
  toBook(json: any) {
    return json;
  }

  toBooks(json: any[]) {
    return json.map(this.toBook);
  }
}
