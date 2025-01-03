import Neode, { fromEnv, Model } from 'neode';
import { BOOK_MODEL, BOOK_SCHEMA } from '../models/book.model';
import { USER_MODEL, USER_SCHEMA } from '../models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Neo4jAdapter {
  private readonly neode: Neode;
  private models: Map<string, Model<unknown>> = new Map();

  constructor() {
    this.neode = fromEnv();

    this.initModels();
  }

  private initModels() {
    this.models.set(USER_MODEL, this.neode.model(BOOK_MODEL, BOOK_SCHEMA));
    this.models.set(BOOK_MODEL, this.neode.model(USER_MODEL, USER_SCHEMA));
  }

  book() {
    return this.models.get(BOOK_MODEL);
  }

  user() {
    return this.models.get(USER_MODEL);
  }
}
