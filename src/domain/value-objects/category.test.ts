import { randomUUID } from 'crypto';
import { Category } from './category';
import { EmptyCategoryNameException } from '../exceptions/empty-category-name.exception';

describe('Category instance tests', () => {
  it('should throw an EmptyCategoryNameException if I try to instanciate a category with a null name', () => {
    const id = randomUUID();
    const name = null;

    expect(() => new Category(id, name)).toThrow(EmptyCategoryNameException);
  });
});
