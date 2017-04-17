Feature: Search Loading
  I should be able to go to see the progress of the search page loading

  Scenario: When I search for something, it should show me a progress bar
    Given I am on the homepage "http://localhost:3000/"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    Then I expect a progress bar "#loading-bar" to show me the progress