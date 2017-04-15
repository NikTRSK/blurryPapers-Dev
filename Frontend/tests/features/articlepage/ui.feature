Feature: Article Item Components check
  The article entries will each be their own component and I should be able to view a list of articles that contain the word that was clicked on from the Word Cloud.

   #Test 2
  @javascript
  Scenario: Check for articles on the article page
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a "present" from the "#word-cloud"
    When I am on the selected word page
    Then I expect a list of Articles to display under the title

  #Test 3
  @javascript
  Scenario: Check for author(s) of article on article page
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a "present" from the "#word-cloud"
    When I am on the selected word page
    Then I expect the article component to list the authors

  #Test 4
  @javascript
  Scenario: Check for button to view article in BibTex
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a "present" from the "#word-cloud"
    When I am on the selected word page
    Then I expect to see a button allowing me to view the BibTeX

  #Test 5
  @javascript
  Scenario: Check for the Download button that links to the article
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a "present" from the "#word-cloud"
    When I click on the Download button
    Then I expect a tab to pop up
