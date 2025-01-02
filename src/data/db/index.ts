import { auth, driver } from 'neo4j-driver';
import { fromEnv } from 'neode';

export const DB_INJECT = 'db_inject';

export function createDriver() {
  return driver('neo4j://localhost', auth.basic('neo4j', 'olamundo'));
}

export function createNeode() {
  return fromEnv();
}
