export class Neo4jAdapterMock {
  book() {
    return this;
  }

  user() {
    return this;
  }

  async all() {
    return {
      toJson: () => {
        return [{ test: true }];
      },
    };
  }

  async create(obj: any) {
    return obj;
  }
}
