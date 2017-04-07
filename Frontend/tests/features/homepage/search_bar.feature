Feature: Search Bar check
  The Search Bar allows me to enter and delete search.

  Scenario: Check if search bar exists
    Given I am on the homepage "http://localhost:3000"
    Then I expect there to be a "#search-input-box"

  Scenario: Search bar is empty when I do not enter anything
    Given I am on the homepage "http://localhost:3000"
    When I enter nothing in the "#search-input-box"
    Then The "#search-input-box" is empty

  Scenario: I am allowed to search for a researcher's last name
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    Then The "#search-input-box" shows "Smith"