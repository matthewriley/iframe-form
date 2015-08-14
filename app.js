// app.routes.js
(function() {
	'use strict';
	angular
		.module('IframeTest', [
			'ui.router',
			'IframeTest.iFrameModule'
		])
		.config(routeConfig);
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routeConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('home', {
				url:'/',
				template: '<h4>Home</h4><p>This is the home page.</p>'
			})
			.state('iFrame', {
				url:'/iframe',
				template: '',
				controller: 'IFrameCtrlAs',
				controllerAs: 'vm'
			})
			.state('iFrame/:flag', {
				url:'/iframe/:flag',
				template: '<h4>Iframe</h4><p><iframe src="{{vm.url}}" id="iframeID" frameborder="1" width="100%" scrolling="no"></iframe></p>',
				controller: 'IFrameCtrlAs',
				controllerAs: 'vm'
			});
	}
})();

// iFrame.controller.js
(function() {
	'use strict';
	angular
		.module('IframeTest.iFrameModule', [])
		.controller('IFrameCtrlAs', IFrameCtrlAs);
	IFrameCtrlAs.$inject = ['$stateParams', '$location'];
	function IFrameCtrlAs($stateParams, $location) {
		var vm = this;
		if(!angular.isDefined($stateParams.flag)){
			var reloadPath = $location.path() + '/true';
			$location.path(reloadPath);
		}
		else{
			vm.url = 'form.html';
		}
	}
})();
