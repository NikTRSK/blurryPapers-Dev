Feature: History check
  There is a search history and enables searching for a previous wordcloud

  @javascript
  Scenario: There is a history when there is a wordcloud.
    Given I am on the homepage "http://localhost:3000"
    When There is a wordcloud
    Then I expect a "#search-history" with the history

  @javascript
  Scenario: Clicking on a history item regenerate an old wordcloud.
    Given I am on the homepage "http://localhost:3000"
    When There is a wordcloud
    When I click on a search history item
    Then The word cloud is regenerated