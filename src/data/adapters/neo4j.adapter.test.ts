import { neodeMock } from './__mocks__/neode.mock';
import { Neo4jAdapter } from './neo4j.adapter';

describe('Neo4jAdapter tests', () => {
  beforeAll(() => {
    jest.mock('neode', neodeMock);
  });

  it('should init the book model on construct', () => {
    const adapter = new Neo4jAdapter();

    expect(adapter.book()).not.toBeNull();
    expect(adapter.book()).toBeDefined();
  });

  it('should init the user model on construct', () => {
    const adapter = new Neo4jAdapter();

    expect(adapter.user()).not.toBeNull();
    expect(adapter.user()).toBeDefined();
  });
});
