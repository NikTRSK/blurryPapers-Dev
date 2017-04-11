const expect = require('chai').expect;

const searchBarTests = function () {

    this.Given(/^I am on the homepage "([^"]*)"$/, (url) => {
        browser.url(url);
});

    // search_bar.feature
    this.Then(/^I expect there to be a "([^"]*)"$/, (element) => {
        this.searchBar = $(element);
    expect(this.searchBar.state).to.eq('success');
});

    this.When(/^I enter nothing in the "([^"]*)"$/, (element) => {
        $(element).setValue("");
});

    this.Then(/^The "([^"]*)" is empty$/, (element) => {
        expect($(element).getValue()).to.be.empty;
});

    this.When(/^I enter "([^"]*)" in the "([^"]*)"$/, (search, element) => {
        $(element).setValue(search);
});

    this.Then(/^The "([^"]*)" shows "([^"]*)"$/, (element, input) => {
        expect($(element).getValue()).to.eq(input);
});


    // search_button.feature
    this.Then(/^I expect a "([^"]*)" with the text "([^"]*)"$/, (element, text) => {
        let btn = $(element);
    expect(btn.state).to.eq('success');
    expect(btn.getText()).to.eq('Search');
});

    // word_cloud.feature
    this.Then(/^There is not a "([^"]*)"$/, (element) => {
        let wordCloud = $(element);
    console.log(wordCloud.value.ELEMENT);
    expect(wordCloud.value.ELEMENT).to.eq('0');
});

    this.Then(/^There is a "([^"]*)"$/, (element) => {
        let wordCloud = $(element);
    console.log(wordCloud.value.ELEMENT);
    expect(wordCloud.value.ELEMENT).to.not.eq('0');
});

    //download_button.feature
    this.When(/^The "([^"]*)" is clicked$/, function (element, callback) { //when the search button is clicked
        let myButton = $(element);
        myButton.click();
    });

    //click on the word from WC
    this.When(/^I select a "([^"]*)" from the "([^"]*)"$/, function (element1, element2) {
        let span = $(element1);
        span.click();
    });

    this.Then(/^I expect to see a "([^"]*)" download button with the text "([^"]*)"$/,(element, text)=> {
        let btn = $(element);
    expect(btn.state).to.eq('success');
    expect(btn.getText()).to.eq('Download List as TXT');
});

    this.Then(/^I expect to see a "([^"]*)" button to download with the text "([^"]*)"$/,(element, text) => {
        let btn = $(element);
    expect(btn.state).to.eq('success');
    expect(btn.getText()).to.eq('Download List as PDF');
});

    // title.feature
    this.Then(/^I expect "([^"]*)" to be the selected word from "([^"]*)"$/, (element, word) => {
        expect(null).to.not.equal(null); // TODO
});

    //selection.feature
    this.Then(/^I expect to see a "([^"]*)" within a "([^"]*)"$/, (arg1, arg2, callback) => {
        expect(null).to.not.equal(null); // TODO
});


    /* New stuff */
    // download_button
    this.Then(/^I expect a "([^"]*)" with the text "([^"]*)" to exist$/, (element, word) => {
        expect(null).to.not.equal(null); // TODO
});

    this.When(/^There exists a wordcloud$/, () => {
        expect(null).to.not.equal(null); // TODO
});

    this.Then(/^Clicking the "([^"]*)" opens an image in a new tab$/, (element) => {
        expect(null).to.not.equal(null); // TODO
});

    // history
    this.Then(/^I expect a "([^"]*)"$/, (element) => {
        expect(null).to.not.equal(null); // TODO
});

    this.When(/^I click on a search history item$/, () => {
        expect(null).to.not.equal(null); // TODO
});

    this.Then(/^The word cloud is regenerated$/, (element) => {
        expect(null).to.not.equal(null); // TODO
});

    // progress bar
    this.Then(/^There isn't a "([^"]*)"$/, (element) => {
        expect(null).to.not.equal(null); // TODO
});

    this.Then(/^There is a "([^"]*)"$/, (element) => {
        expect(null).to.not.equal(null); // TODO
});
};

module.exports = searchBarTests;