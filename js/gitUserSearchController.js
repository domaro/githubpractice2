githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
	var self = this;
	var token = "d5a9952caad7ee9d1d2ffeb96730363bdfacea8f";
	var searchResource = $resource('https://api.github.com/search/users');

	self.doSearch = function (){
		self.searchResult = searchResource.get(
			{ q: self.searchTerm,
				access_token: token
			}
		);
	};
  
}]);