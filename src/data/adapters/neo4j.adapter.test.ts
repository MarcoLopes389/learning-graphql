import { Test } from '@nestjs/testing';
import { NeodeMock } from './__mocks__/neode.mock';
import { Neo4jAdapter, NEODE } from './neo4j.adapter';
import { fromEnv } from 'neode';

describe('Neo4jAdapter tests', () => {
  let neo4jAdapter: Neo4jAdapter;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        Neo4jAdapter,
        {
          useFactory: () => {
            return fromEnv();
          },
          provide: NEODE,
        },
      ],
    })
      .overrideProvider(NEODE)
      .useClass(NeodeMock)
      .compile();

    neo4jAdapter = moduleRef.get(Neo4jAdapter);
  });

  beforeEach(() => jest.clearAllMocks());

  it('should init the book model on construct with right values', () => {
    expect(neo4jAdapter.book()).not.toBeNull();
    expect(neo4jAdapter.book()).toBeDefined();
  });

  it('should init the user model on construct', () => {
    expect(neo4jAdapter.user()).not.toBeNull();
    expect(neo4jAdapter.user()).toBeDefined();
  });
});
