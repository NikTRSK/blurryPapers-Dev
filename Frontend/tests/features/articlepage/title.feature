Feature: Title check
  I should be able to load the page after clicking on a word from the Word Cloud and check its title

  #Test 1
  @javascript
  Scenario: Get the title of webpage
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a "present" from the "#word-cloud"
    Then I expect "#articles-title" to be the selected word from "present"

