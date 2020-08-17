Feature: Automate Login page negative functionality

  Scenario: Login failed functionality
    Given I Navigate to opencart website
    And Verify the title as "OpenCart - Open Source Shopping Cart Solution"
    When Click on login link
    And User logs in using wrong "testing2@cart.com" or "wrong_psd"
    Then Verify the login error message as "No match for E-Mail and/or Password."