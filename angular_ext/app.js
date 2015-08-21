angular.module('demo', [])
  .run(['$http', function ($http) {
    $http.defaults.headers.common.Accept = 'application/json';
  }])
  
  
console.log("app.js");


angular.module('demo')
  .factory('api', ['$http', function($http) {
    return {
    	search: function(query, successCallback, failCallback) {
    		$http.get('https://hyperlinkapp.com/api/search/'), {params: {query: query}})
        		.success(function(data) {
          		successCallback(data.nodes);
        		})
        		.error(function(data) {
          		if (angular.isFunction(errorCallback)) {
            			errorCallback(data.message);
          		}
        	});
    	}
    }
  }]);
  
  
function Background() {
  // load angular module
  var $injector = angular.injector(['ng', 'demo']);
  
  // get handle of compile modules
  this.$compile = $injector.get('$compile');
  this.$templateCache = $injector.get('$templateCache');
  
  // get handle of our services
  this.api = $injector.get('api');
  this.config = $injector.get('config');
}
  
Background.prototype.compileTemplates = function () {
	var $this = this;
	this.templates = {};
	var templateKeys = ['hypercard.html'];
	angular.forEach(templateKeys, function (key) {
		var html = $this.$templateCache.get(key);
		$this.templates[key] = $this.$compile(html);
	});
}



Background.prototype.renderTemplate = function (template, scope, callback) {
	var $this = this;
	if (!(scope instanceof $this.$rootScope.constructor)) {
		var original = scope;
		scope = $this.$rootScope.$new();
		angular.extend(scope, original);
	}
	// the function parameter ensures that we get a cloned element
	var compiled = $this.templates[template](scope, function (clonedElement, scope) {});
	$this.$timeout(function () {
		// if we include any comments in the template file, it will be compiled as an individual elements
		// we need to find the wanted element, which should always be the first div in template files
		var elem = _.find(compiled, function (el) {
			return el.nodeName.toLowerCase() === 'div';
	});
	var html = elem.outerHTML;
	callback(html);
	}, 0);
};