Feature: Number of items input box check
  There is a number of items input box on the homepage

  @javascript
  Scenario: Check if the number of items box exists
    Given I am on the homepage "http://localhost:3000"
    Then I expect there to be a "#search-numitems-box" for the number of items


  @javascript
  Scenario: Number of items box is empty when I do not enter anything
    Given I am on the homepage "http://localhost:3000"
    When I enter nothing in the number of items box "#search-numitems-box"
    Then The number items box "#search-numitems-box" is empty

  Scenario: I am allowed to search for a researcher's last name
    Given I am on the homepage "http://localhost:3000"
    When I enter "5" in the number of items box "#search-numitems-box"
    Then I expect the number of items box "#search-numitems-box" to show "5"