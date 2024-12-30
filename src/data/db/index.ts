import { auth, driver } from 'neo4j-driver';

export const DB_INJECT = 'db_inject';

export function createDriver() {
  return driver('neo4j://localhost', auth.basic('neo4j', 'neo4j'));
}
