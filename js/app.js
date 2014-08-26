var app = angular.module('app', ['ngRoute','emailFilters','ngSanitize','mgcrea.ngStrap','checklist-model']);

app.config(function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  });
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
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
  $routeProvider.otherwise({ redirectTo: '/' });
});
app.run(function(authentication, $rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function(evt) {
    if(!authentication.isAuthenticated){ 
      $location.url("/login");
    }
    evt.preventDefault();
  });
})


app.controller('LoginCtrl', function($scope, $http, $location, authentication) {
  $scope.login = function() {
    if ($scope.username === 'admin' && $scope.password === 'pass') {
      console.log('successful')
      authentication.isAuthenticated = true;
      authentication.user = { name: $scope.username };
      $location.url("/");
    } else {
      $scope.loginError = "Invalid username or password ";
      console.log('Login failed..');
    };
  };
});



app.controller('HomeCtrl', function($scope, authentication) {
  $scope.user = authentication.user.name;
  
});

app.factory('authentication', function() {
  return {
    isAuthenticated: false,
    user: null
  }
});