#Feature: Search Loading
#  I should be able to go to see the progress of the search page loading
#
#  Scenario: When I search for something, it should show me a progress bar
#    Given I am on the homepage "http://localhost:3000/"
#    And The search bar is empty
#    And I enter "Smith"
#    And I click the "#search-button"
#    Then I expect a "#status-bar" to show me the progress