Feature: Create a book
    A user can create a new book

    Scenario: User can't create the same book two times
        Given Exists a book
        When I try to create the same book
        Then It should throw an BookAlreadyExistsException