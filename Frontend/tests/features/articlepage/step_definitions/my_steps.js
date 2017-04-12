var myStepDefinitionsWrapper = function () {


    this.Given(/^I am on the homepage "([^"]*)"$/, (url) => {
        browser.url(url);
    });

    this.Then(/^There is a "\.word\-cloud"$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^I expect a "([^"]*)" to show me the progress$/, function (arg1, callback) {
        callback.pending();
    });

    this.Given(/^The search bar is empty$/, function (callback) {
        callback.pending();
    });

    this.Then(/^There is a wordcloud$/, function (callback) {
        callback.pending();
    });

    this.Then(/^I expect "\#articles\-title"([^"]*)"\.tag\-cloud\-tag"$/, function (arg1, arg2, callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;