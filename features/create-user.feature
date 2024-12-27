Feature: Create user
    A user can register himself

    Scenario: A user can't register two times with same email
    Given Exists an user
    When I try to create a user with the same email
    Then It should throw an UserAlreadyExistsException