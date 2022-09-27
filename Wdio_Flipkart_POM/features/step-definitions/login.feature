Feature: Performing a login

  Scenario: As a user, I can log into the secure area
    Given I open the Home page
    Then Removing the pop-up
    Then I click the login button
    When I login with <username> and <password>
    Then I'm on the Productpage                                    
  
  
  