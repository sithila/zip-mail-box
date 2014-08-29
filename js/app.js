var app = angular.module('app', ['ngRoute','emailFilters','ngSanitize','mgcrea.ngStrap','checklist-model','LocalStorageModule']);

app.config(function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'maillistCtrl'
  });
  $routeProvider.when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'signupController'
  });
  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'loginController'
  });
  //$routeProvider.when('/', {
//    templateUrl: 'views/home.html',
//    controller: 'HomeCtrl'
//  });
   $routeProvider.when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl'
  });
    $routeProvider.when('/firm', {
    templateUrl: 'views/firm.html',
    controller: 'homeCtrl'
  });
	 $routeProvider.when('/quickadd', {
    templateUrl: 'views/quickadd.html',
    controller: 'homeCtrl'
  });
  	 $routeProvider.when('/earnings', {
    templateUrl: 'views/earnings.html',
    controller: 'homeCtrl'
  });
	$routeProvider.when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'homeCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });
});


var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
