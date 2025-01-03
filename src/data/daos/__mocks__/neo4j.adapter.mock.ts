/* eslint-disable @typescript-eslint/no-unused-vars */
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
    return {
      toJson: () => {
        return { test: true };
      },
    };
  }

  async first(key: string, value: string) {
    return {
      toJson: () => {
        return { test: true };
      },
    };
  }
}
