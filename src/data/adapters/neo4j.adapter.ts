import Neode, { Model } from 'neode';
import { BOOK_MODEL, BOOK_SCHEMA } from '../models/book.model';
import { USER_MODEL, USER_SCHEMA } from '../models/user.model';
import { Inject, Injectable } from '@nestjs/common';

export const NEODE = 'neode';

@Injectable()
export class Neo4jAdapter {
  private models: Map<string, Model<unknown>> = new Map();

  constructor(
    @Inject(NEODE)
    private readonly neode: Neode,
  ) {
    this.initModels();
  }

  private initModels() {
    this.models.set(BOOK_MODEL, this.neode.model(BOOK_MODEL, BOOK_SCHEMA));
    this.models.set(USER_MODEL, this.neode.model(USER_MODEL, USER_SCHEMA));
  }

  book() {
    return this.models.get(BOOK_MODEL);
  }

  user() {
    return this.models.get(USER_MODEL);
  }
}
