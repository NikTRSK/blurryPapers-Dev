Feature: Download Button check
  There is a search Button on the homepage and clicking the button generates an image of the wordcloud.

  @javascript
  Scenario: When I am on the homepage initially there isn't Download button.
    Given I am on the homepage "http://localhost:3000"
    Then I expect a download button "#download-image-button" with the text "Download Image" to not exist

  @javascript
  Scenario: There is a Download button when a wordcloud is generated.
    Given I am on the homepage "http://localhost:3000"
    When There is a "#word-cloud"
    Then I expect a download button "#download-image-button" with the text "Download Image" to exist

  @javascript
  Scenario: Clicking the Download Image button opens a new tab with a wordcloud image.
    Given I am on the homepage "http://localhost:3000"
    When There is a "#word-cloud"
    Then Clicking the "#download-image-button" opens a download link