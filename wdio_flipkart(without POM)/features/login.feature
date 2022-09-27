Feature: Performing a login

  Scenario: As a user, I can log into the secure area
    Given I open the Home page
    Then Removing the pop-up
    Then I open the login page
    When I login with "7022827267" and "Kiranjack@7485"
    Then I'm on the Productpage                                    
  