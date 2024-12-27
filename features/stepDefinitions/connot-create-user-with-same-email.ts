import { Given, When, Then } from '@cucumber/cucumber';

Given('Exists an user', () => {});
When('I try to create a user with the same email', () => {});
Then('It should throw an UserAlreadyExistsException', () => {
  return true;
});
