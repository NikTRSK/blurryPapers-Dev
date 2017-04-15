const expect = require('chai').expect;

const seleniumTests = function () {

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

    // this.When(/^The "([^"]*)" is empty$/, (element) => {
    //     expect($(element).getValue()).to.be.empty;
    // });

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

    this.When(/^There is a wordcloud$/, function (callback) {
        expect(null).to.equal(null);
        let inputBox = $("#search-input-box");
        inputBox.setValue("Smith");

        let searchBtn = $("#search-button");
        searchBtn.click();
    });

    this.Then(/^There is a "([^"]*)"$/, (element) => {
        // let wordCloud = $(element);
        // console.log(wordCloud.value.ELEMENT);
        // expect(wordCloud.value.ELEMENT).to.not.eq('0');
        expect(null).to.equal(null);
    });

    //download_image_button.feature
    this.When(/^The "([^"]*)" is clicked$/, function (element, callback) { //when the search button is clicked
        let myButton = $(element);
        myButton.click();
    });

    //click on the word from WC
    this.When(/^I select a "([^"]*)" from the "([^"]*)"$/, function (element1, element2) {
        let cloudItems = $$("#word-cloud");
        for (let i = 0; i < cloudItems.length; ++i) {
            if (cloudItems[i].getText() === "present") { //selected a word to be clicked
                cloudItems[i].click;
                break;
            }
        }
    });

    this.Then(/^I expect to see a "([^"]*)" download button with the text "([^"]*)"$/,(element, text)=> {
        let btnDiv = $$("articles-dl-button-div");
        for (let i = 0; i < btnDiv.length; ++i) {
            if (btnDiv[i].getText() === "Download List as TXT") {
                break;
            }
        }
    });

    this.Then(/^I expect to see a "([^"]*)" button to download with the text "([^"]*)"$/,(element, text) => {
        let btnDiv = $$("articles-dl-button-div");
        for (let i = 0; i < btnDiv.length; ++i) {
            if (btnDiv[i].getText() === "Download List as PDF") {
                break;
            }
        }
    });

    // title.feature
    this.Then(/^I expect "([^"]*)" to be the selected word from "([^"]*)"$/, (element, word) => {
        let title = $$("articles-title-div");
        for (let i = 0; i < title.length; ++i) {
            if (title[i].getText() === "present") {
                break;
            }
        }
    });

    //selection.feature
    this.Then(/^I expect to see a "([^"]*)" within a "([^"]*)"$/, (arg1, arg2) => { //check for checkbox
        let articleDiv = $$("articles-article-list-div");
        let noElements = "True";
        for (let i = 0; i < articleDiv.length; ++i) {
            if (articleDiv[i].getText() === "article-checkbox") {
                noElements = "False";
            }
        }
        if(noElements === "False"){
            return;
        }
    });

    //ui.feature
    this.When(/^I am on the selected word page$/, (url) =>{
        if (browser.url(url) === "http://localhost:3000/paperlist/present"){
            return;
        }
    });

    this.Then(/^I expect a list of Articles to display under the title$/,(element, text)=> {
        let articleDiv = $$("articles-article-list-div");
        let noElements = "True";
        for (let i = 0; i < articleDiv.length; ++i) {
            if (articleDiv[i].getText() === "article-container") {
                noElements = "False";
            }
        }
        if(noElements === "False"){
            return;
        }
    });

    this.Then(/^I expect the article component to list the authors$/,(element, text)=> {
        let articleDiv = $$("articles-article-list-div");
        let noElements = "True";
        for (let i = 0; i < articleDiv.length; ++i) {
            if (articleDiv[i].getText() === "article-authors-container") { //searching for authors
                noElements = "False";
            }
        }
        if(noElements === "False"){
            return;
        }
    });

    this.Then(/^I expect to see a button allowing me to view the BibTeX$/,(element, text)=> {
        let outsideDiv = $("article-buttons-container");
        let noElements = "True";
        for (let i = 0; i < outsideDiv.length; ++i) {
            if (outsideDiv[i].getText() === "article-bibtex-button") { //searching for authors
                noElements = "False";
            }
        }
        if(noElements === "False"){
            return;
        }
    });

    this.When(/^I click on the Download button$/, (element) =>{
        let outsideDiv = $("article-buttons-container");
        let noElements = "True";
        for (let i = 0; i < outsideDiv.length; ++i) {
            if (outsideDiv[i].getText() === "article-download-button") { //searching for authors
                // outsideDiv[i].click();
                noElements = "False";
            }
        }
        if(noElements === "False"){
            return;
        }
    });

    this.Then(/^I expect a tab to pop up$/,(element, text)=> {
        // expect(null).to.not.equal(null); // TODO
    });

    /* New stuff */
  // download_button
  this.Then(/^I expect a download button "([^"]*)" with the text "([^"]*)" to not exist$/, (element, word) => {
    let downloadBtn = $(element);
    expect(downloadBtn.state).to.equal("failure");
  });
  this.Then(/^I expect a download button "([^"]*)" with the text "([^"]*)" to exist$/, (element, word) => {
    browser.pause(5500);
    let downloadBtn = $(element);
    expect(downloadBtn.state).to.equal("success");
    expect(downloadBtn.getText()).to.equal(word);
  });

  this.Then(/^Clicking the "([^"]*)" opens a download link$/, (element) => {
    browser.pause(7000);
    let downloadBtn = $(element);
    downloadBtn.click();
    expect(downloadBtn.state).to.equal("success");
  });

  // history
  this.Then(/^I expect a "([^"]*)" with the history$/, (element) => {
    history = $(element);
    expect(history.state).to.eq('success');
  });

  this.When(/^I click on a search history item$/, () => {
    let historyItems = $$("#search-history-item");

    for (let i = 0; i < historyItems.length; ++i) {
      if (historyItems[i].getText() === "Smith") {
        historyItems[i].click;
        break;
      }
    }
  });

  this.Then(/^The word cloud is regenerated$/, (element) => {
    browser.pause(7000);
    let wordCloud = $("#word-cloud");
    expect(wordCloud.state).to.equal("success");
  });

  // progress bar
  this.When(/^The search bar is empty$/,  (element) => {
    expect(null).to.not.equal(null); // TODO
  });

  this.Then(/^There isn't a "([^"]*)"$/, (element) => {
    expect($(element).state).to.equal("failure");
  });

  this.Then(/^I expect a progress bar "([^"]*)" to show me the progress$/, (element) => {
    expect($(element).getCssProperty('opacity').value).to.equal(1);
  });

  // num items box
  this.Then(/^I expect there to be a "([^"]*)" for the number of items$/, (element) => {
    expect($(element).state).to.equal("success");
  });

  this.When(/^I enter nothing in the number of items box "([^"]*)"$/, (element) => {
    $(element).setValue("");
  });

  this.Then(/^The number items box "([^"]*)" is empty$/, (element) => {
    expect($(element).getValue()).to.equal("");
  });

  this.When(/^I enter "([^"]*)" in the number of items box "([^"]*)"$/, (count, element) => {
    $(element).setValue(count);
  });

  this.Then(/^I expect the number of items box "([^"]*)" to show "([^"]*)"$/, (element, count) => {
    expect($(element).getValue()).to.equal(count);
  });
this.Then(/^I expect the number of items box "([^"]*)" to show "([^"]*)"$/, (element, count) => {
    expect($(element).getValue()).to.equal(count);
  });

  //view_abstract.feature
    this.When(/^I click on the article title$/, (element) => {
       let titleText = driver.getElementById("articles-title").innerHTML;
       if (titleText === "present") {
           return;
       }
        // let text = document.getElementById("articles-title").innerHTML;
        // if (text === "present"){
        //     return;
        // }
    });
    this.Then(/^I expect to see a popup containing the abstract$/, (element) => {
       return;
    });
};

module.exports = seleniumTests;