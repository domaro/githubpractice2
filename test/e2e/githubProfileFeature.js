describe('Gitgub Profile Finder', function() {
	var searchBox = element(by.model('searchTerm'));
	var searchButton = element(by.className('btn'));

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

	it('has a title', function() {
      expect(browser.getTitle()).toEqual('Github user search');
	});

    it('finds the last Spike', function() {
      searchBox.sendKeys('spike');
      searchButton.click();

      var profiles = element.all(by.repeater('user in searchResult.items'));
      expect(profiles.last().getText()).toEqual('spike01');
  });
});