Feature: The ability to select articles from the articles page
  I should be able to select articles from the articles page

  #Test 10
  @javascript
  Scenario: Checkbox next to the article name
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When There is a "#word-cloud"
#    When I am on the artist page
#    Then I expect to see a checkbox next to the article title
#
