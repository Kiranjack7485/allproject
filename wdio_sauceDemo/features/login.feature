Feature: The Sauce demo webpage

  Scenario: As a user, I can login, add the product to the cart and order the product
    Given I am on the login page
    When I login with <username> and <password>
    Then Adding the second least expensive product to the cart
    And Entering the user information <firstname>, <lastname> and <zipcode>
    And I proceed for the checkout
    And Order should be placed successfully
