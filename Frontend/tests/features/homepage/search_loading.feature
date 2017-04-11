Feature: Search Loading
  I should be able to go to see the progress of the search page loading

  Scenario: Initially there isn't a progress bar
    Given I am on the homepage "http://localhost:3000/"
    Then There isn't a "#progress-bar"

  Scenario: There is a progress bar when data is being fetched
    Given I am on the homepage "http://localhost:3000/"
    When I enter "Smith" in the "#search-input-box"
    When I click on "#search-button"
    Then There is a "#progress-bar"