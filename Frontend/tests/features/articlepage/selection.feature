Feature: The ability to select articles from the articles page
  I should be able to select articles from the articles page

  #Test 10
  @javascript
  Scenario: Checkbox next to the article name
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a ".tag-cloud-tag" from the "#word-cloud"
    Then I expect to see a "#article-checkbox" within a "#article-title-container"

#