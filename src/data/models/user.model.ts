import { SchemaObject } from 'neode';

export const USER_MODEL = 'User';

export const USER_SCHEMA: SchemaObject = {
  id: {
    type: 'uuid',
    primary: true,
  },
  name: {
    type: 'string',
  },
  email: {
    type: 'string',
  },
  password: {
    type: 'string',
  },
};
