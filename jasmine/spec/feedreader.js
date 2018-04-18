/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('have a URL defined, and that is not empty', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe(0);
      }
    });
    /* This test loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('have a name defined, and that is not empty', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe(0);
      }
    });
  });

  /* This is a test suite named "The menu" */
  describe('The menu', function() {
    /* This test ensures the menu element is
     * hidden by default.
     */
    it('the menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /* This test ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * has two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('displays when clicked and hide when clicked again', function() {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });


  /* This is a test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* This test ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * loadFeed() is asynchronous so this test requires
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('there is at least a single .entry element within the .feed container', function(done) {
      expect($('.feed').children('.entry')).not.toBe(0);
      done();
    });
  });


  /* This is a test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* This test ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * loadFeed() is asynchronous, so this test requires
     * beforeEach and done() function. From the beforeEachfunction
     * we saved the HTML content of the .feed div, so that
     * we can compare this div's content after the click.
     */
    var feed = 0;
    beforeEach(function(done) {
      loadFeed(0, function() {
        feed += $('div.feed').html();
        done();
      });
    });

    it('when a new feed is loaded by the loadFeed function that the content actually changes', function(done) {
      const feedListItem = $('.feed-list li:nth-child(2) a');
      feedListItem.trigger('click');
      expect($('div.feed').html()).not.toEqual(feed);
      done();
    });
  });
}());