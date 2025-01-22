import { Injectable } from '@nestjs/common';
import { Neo4jAdapter } from '../adapters/neo4j.adapter';
import { User } from 'src/domain/models/user';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UserDao {
  constructor(
    private readonly neo4jAdapter: Neo4jAdapter,
    private readonly userMapper: UserMapper,
  ) {}

  async findOneByEmail(email: string) {
    const result = await this.neo4jAdapter.user().first('email', email);
    const json = await result.toJson();
  }

  async create(user: User) {
    const result = await this.neo4jAdapter.user().create(user);
    const json = await result.toJson();
  }
}
