Feature: History check
  There is a search history and enables searching for a previous wordcloud

@javascript
Scenario: There is a history when there is a wordcloud.
  Given I am on the homepage "http://localhost:3000"
  When There exists a wordcloud
  Then I expect a "#search-history"

@javascript
Scenario: There is a history when there is a wordcloud.
  Given I am on the homepage "http://localhost:3000"
  When There exists a wordcloud
  When I click on the search iteam
  Then The word cloud is regenerated