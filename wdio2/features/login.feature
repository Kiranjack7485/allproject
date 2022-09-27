Feature: Saucedemo webpage

  Scenario: As a user, I should be able to login and order a product successfully

    Given I'm on the homepage
    When I'll login with <username> and <password>
    And I should add the 2nd least expensive product from the cart
    And I should validate the User Info using <firstname>, <lastname> and <zipcode>
    And I confirm the order
    Then Order should be placed successfully

  
