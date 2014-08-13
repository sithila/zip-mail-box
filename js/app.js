(function () {
  angular.module('app', ['ngRoute','emailFilters']);
  
    
  function config ($routeProvider) {
	  
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl',
    controllerAs: 'main',
	resolve: MainCtrl.resolve
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/firm', {
    templateUrl: 'views/firm.html',
    controller: 'homeCtrl',
    controllerAs: 'main'
  })
  
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl',
    controllerAs: 'main'
  });
   
}
angular
  .module('app')
  .config(config);
    
})();