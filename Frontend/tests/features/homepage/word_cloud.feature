Feature: Word Cloud check
  There is a word cloud on the homepage and it is present only when I query some thing

  @javascript
  Scenario: When I am on the homepage initially the word cloud is not present
    Given I am on the homepage "http://localhost:3000"
    Then There is not a "#word-cloud"

  @javascript
  Scenario: When I am on the homepage and I search for something there is a word cloud
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    Then There is a "#word-cloud"