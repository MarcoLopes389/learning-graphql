import { Given, When, Then } from '@cucumber/cucumber';

Given('Exists a book', () => {});
When('I try to create the same book', () => {});
Then('It should throw an BookAlreadyExistsException', () => {
  return true;
});
