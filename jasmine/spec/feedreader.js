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
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         
         it('RSS feeds have url', function(){
         	for(var i in allFeeds){
         		expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0)
         	};
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         
         it('RSS feeds have name', function(){
         	for(var i in allFeeds){
         		expect(allFeeds[i].name).toBeDefined(0);
                expect(allFeeds[i].name.length).not.toBe(0);
                expect(typeof allFeeds[i].name).toBe('string');
         	}
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

        var menuTest = $('body').hasClass('menu-hidden');

    	it('menu should be hidden', function(){
    		// test that ensures the menu element is
      //    * hidden by default.
    		expect(menuTest).toEqual(true);
    	});
    });
        


          // test that ensures the menu changes
          // * visibility when the menu icon is clicked. 
          it('menu changes', function(){
          	var menuStatus = $('.menu-icon-link');
          	menuStatus.click();
          	expect($('body').hasClass('menu-hidden')).toBe(true);
          	menuStatus.click();
          	expect($('body').hasClass('menu-hidden')).toBe(false);

          })

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
    	// async call
    	beforeEach(function(done){
    		loadFeed(0, function(){
    			done();
    		});
    	});

    	// checks for entry
    	it('feed container has an entry', function(){
    		var entryNum = $('.entry').length;
    		expect(entryNum).toBeGreaterThan(0);
    	});
    });

    describe('New Feed Selection', function(){
    	var compareFirst;
    	var compareSecond;

    	// beforeEach for async calls
    	beforeEach(function(done){
    		loadFeed(1, function(){
    			compareFirst = $('.feed').html();
    			loadFeed(2, function(){
    				done();
    			});
    		});
    	});

    	// afterEach for async calls
    	afterEach(function(){
    		loadFeed(0);
    	});

    	// comparison test for entries
    	it('displays feed content change on menu select', function(){
            expect(compareFirst).toBeDefined();
            compareSecond = $('.feed').html();
            expect(compareSecond).toBeDefined();
            expect(compareFirst).not.toEqual(compareSecond);
         }); 
    });
}());
