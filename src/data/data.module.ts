import { Module } from '@nestjs/common';
import { BookDao } from './daos/book.dao';
import { Neo4jAdapter, NEODE } from './adapters/neo4j.adapter';
import { BookMapper } from './mappers/book.mapper';
import { fromEnv } from 'neode';

@Module({
  providers: [
    {
      useFactory: () => {
        return fromEnv();
      },
      provide: NEODE,
    },
    BookDao,
    Neo4jAdapter,
    BookMapper,
  ],
  exports: [BookDao],
})
export class DataModule {}
