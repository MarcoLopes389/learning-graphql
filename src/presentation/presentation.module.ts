import { Module } from '@nestjs/common';
import { BookResolver } from './resolvers/book.resolver';
import { DomainModule } from 'src/domain/domain.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DomainModule,
  ],
  providers: [BookResolver],
})
export class PresentationModule {}
