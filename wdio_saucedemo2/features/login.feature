Feature: The PHP Travels website

  Background: Login to the Homepage
    Given I am on the login page
  
  Scenario Outline: As a user, I can log into the secure area

    
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message       |  
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
