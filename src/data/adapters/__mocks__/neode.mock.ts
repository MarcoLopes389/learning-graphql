export class NeodeMock {
  constructor() {}

  fromEnv() {
    return this;
  }

  model(name: string, schema: any) {
    return schema;
  }
}
