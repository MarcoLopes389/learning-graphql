import { EmptyCategoryNameException } from '../exceptions/empty-category-name.exception';

export class Category {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    if (!name) {
      throw new EmptyCategoryNameException();
    }

    this.id = id;
    this.name = name;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }
}
