Feature: Search Button check
  There is a search Button on the homepage

  @javascript
  Scenario: When I am on the homepage there is a button with the text Search.
    Given I am on the homepage "http://localhost:3000"
    Then I expect a "#search-button" with the text "Search"