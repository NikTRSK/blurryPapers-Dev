var myStepDefinitionsWrapper = function () {


    this.When(/^The "\#search\-button" is clicked$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^I click on "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;