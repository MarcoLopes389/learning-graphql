import { Module } from '@nestjs/common';
import { createDriver, DB_INJECT } from './db';
import { BookDao } from './daos/book.dao';

@Module({
  providers: [
    {
      provide: DB_INJECT,
      useFactory: () => {
        return createDriver();
      },
    },
    BookDao,
  ],
  exports: [BookDao],
})
export class DataModule {}
