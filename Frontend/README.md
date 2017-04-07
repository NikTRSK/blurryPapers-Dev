# 310-Project2
Super awesome app for project 2 called blurryPaper

## Commit rules
1. ***Do not*** commit directly to the master branch.
2. Have a branch for every feature we implement. Potentially branch out for every task.
3. Once you feel confident with the feature merge it with the master branch (we’ll go over this for anyone not familiar with it)

### Commiting and Commit Messages
1. Commit often since they will be looking at pacing.
2. As mentioned above never commit to master
3. Format of the commit messages should be as follows:
	`<commit type>: <message>; <partner1>, <partner2>`

&nbsp;&nbsp;**commit type:**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**T** - Test

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**F** - Feature/Function/Functionality

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**B** - Bugfix of existing code

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**M** - Merge request into branch

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**D** - (no, no it’s not the D) Any sort of documentation

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**C** - Cleanup. Anything that doesn’t change functionality (removing commented out code, adding comments, etc)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**S** - Scrum report

&nbsp;&nbsp;**message:** description of what you have done

&nbsp;&nbsp;**partner1, partner2:** optional. If you pair programming

###### Ex commit message:

`T: implemented tests for xyz; Jean, Jin`

## Get started (Setup & Run Dev server)

* First install all the necessary dependencies.
```
> npm install
```

* Run an initial webpack build
```
> webpack
```

* Start the development server (changes will now update live in browser)
```
> npm run start
```

To see the results of your hard work go to: [http://localhost:3000/](http://localhost:3000/)
* Yes even Firefox, Jean

## Tests
### Integration (Blackbox) Tests

#### Before running the tests for the first time:

* The setup guide is based on **[this](https://www.codementor.io/jeremyrajan/acceptance-testing-javascript-cucumber-webdriverio-du1087f5i)**. It also provides a refresher on writing .feature files and step definitions.
* Chai assertions **[this](http://chaijs.com/api/bdd/)**.
* WebdriverIO API **[this](http://webdriver.io/api.html)**.

##### Install global packages

* Most packages are included in package.json. The following packages need to be install as global packages as well.
```
npm install -g webdriverio
npm install -g wdio-cucumber-framework
npm install -g selenium-standalone 
npm install -g wdio-sauce-service
npm install -g wdio-selenium-standalone-service
```

##### Setup wdio
This has already been setup and can be found in the `/tests` folder. Should you need to re run te setup again follow the reference link above.

##### Initialize Selenium

Navigate to the `/tests` folder and type in `selenium-standalone install`

#### Running the INTEGRATION TESTS

* Run `npm test`


## Folder Structure
```
dev // All the developement happens in here
--js // JavaScript files here
----actions // Things that happen (BUTTON_CLICKED etc)
----components // Anything used for displaying stuff
----containers // A smart component (aware of the state/data changes)
----reducers // Reducers take in actions and update part of application state.
----actionCreators.js // Entry point for the App
--css // Styles here. Let's keep this as SASS
src // This is where the project is built
--js // Generally you don't need to touch this
----bundle.min.js // The packaged app (by webpack)
--actionCreators.js // Entry point for bundle.min.js
tests // All unit & integration tests and blackbox tests go here
--features // All the .feature files go here
----step-definitions // The step definitions go here
wdio.con.js // WebdriverIO config file
```
