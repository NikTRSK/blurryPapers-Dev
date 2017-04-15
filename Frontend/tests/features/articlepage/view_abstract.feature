Feature: Be able to view the abstract of an article
  I should be able to view the abstract of an article when I click on the article title

  #Test 11
  @javascript
  Scenario: Abstract popup
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a "present" from the "#word-cloud"
    When I am on the selected word page
    When I click on the article title
    Then I expect to see a popup containing the abstract