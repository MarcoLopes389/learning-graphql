import { BadRequestException, Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { DuplicatedBookException } from 'src/domain/exceptions/duplicated-book.exception';
import { EmptyBookNameException } from 'src/domain/exceptions/empty-book-name.exception';
import { InvalidBookPublicationDateException } from 'src/domain/exceptions/invalid-book-publication-date.exception';

@Catch(
  EmptyBookNameException,
  InvalidBookPublicationDateException,
  DuplicatedBookException,
)
export class ExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException) {
    const newException = new BadRequestException(exception.message);
    return newException;
  }
}
