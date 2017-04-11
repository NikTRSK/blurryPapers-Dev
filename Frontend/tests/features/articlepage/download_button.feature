Feature: Buttons to download the list of selected articles
  I should be able to download the list of checked articles from the artist page either as text or PDF.

   #Test 8
  @javascript
  Scenario: Check for Download text button
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a ".tag-cloud-tag" from the "#word-cloud"
    Then I expect to see a "#articles-dl-txt-button" download button with the text "Download List as TXT"
  #Test 9
  @javascript
  Scenario: Check for Download PDF button
    Given I am on the homepage "http://localhost:3000"
    When I enter "Smith" in the "#search-input-box"
    When The "#search-button" is clicked
    When I select a ".tag-cloud-tag" from the "#word-cloud"
    Then I expect to see a "#articles-dl-pdf-button" button to download with the text "Download List as PDF"
