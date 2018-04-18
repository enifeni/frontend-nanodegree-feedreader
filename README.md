# Udacity FEND project: FeedReader Testing

Fifth project in the Google-Udacity Scholarship 2018.

# Project Overview

In this project I was given a web-based application that reads RSS feeds by Udacity. Udacity had included [Jasmine](http://jasmine.github.io/) and even started writing the first test suite, and my task was to finish all of the tests.

##  All test required to successfully run the application

**RSS feed**
* loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

**The menu**
* ensures the menu element is hidden by default.
* ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

**Initial Entries**
* ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

**New Feed Selection**
* ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

_Other requirements:_

No test should be dependent on the results of another.
Callbacks should be used to ensure that feeds are loaded before they are tested.

## Built with
Jasmine
jQuery
