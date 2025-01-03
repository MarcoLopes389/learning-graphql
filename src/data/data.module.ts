import { Module } from '@nestjs/common';
import { BookDao } from './daos/book.dao';
import { Neo4jAdapter } from './adapters/neo4j.adapter';
import { BookMapper } from './mappers/book.mapper';

@Module({
  providers: [BookDao, Neo4jAdapter, BookMapper],
  exports: [BookDao],
})
export class DataModule {}
