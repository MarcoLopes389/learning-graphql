import { SchemaObject } from 'neode';

export const BOOK_SCHEMA: SchemaObject = {
  publicationDate: {
    type: 'datetime',
  },
  name: {
    type: 'string',
  },
  id: {
    primary: true,
    type: 'uuid',
  },
};

export const BOOK_MODEL = 'Book';
