function MainCtrl ($scope) {
	$scope.selectedEmail;
	 $scope.setselectedEmail = function(emaillist) {
		 //alert(emaillist);
		$scope.selectedEmail = emaillist; 
	 };
	 $scope.isSelected = function(emaillist) {
		if ($scope.selectedEmail){
		return 	$scope.selectedEmail === emaillist;
		}
	 };

}


angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
  
function maillistCtrl ($scope, $http) {
	
 $scope.emaillist = {};
 $scope.emailinfo = {};
  $http.get('json/inbox.json')
       .then(function(res){
          $scope.emaillist = res.data;
		  //alert($scope.todos);                
        });

 
  $scope.loadMail = function() {
       $http.get('json/inbox.json')
       .then(function(res){
          $scope.emaillist = res.data;
		  //alert($scope.todos);                
        });

    };
	
	 $scope.loadOutbox = function() {
       $http.get('json/outbox.json')
       .then(function(res){
          $scope.emaillist = res.data;
		  //alert($scope.todos);                
        });

    };
	
	$scope.loadMailContent = function() {
       $http.get('json/outbox.json')
       .then(function(maildata){
          $scope.emailinfo = maildata.data;
		  //alert($scope.todos);                
        });

    };

//var promise = SomeService.getTeams();
//promise.then(function(data) {
//    $scope.teams = data;
//	$scope.emaillist = data.data;
//});
}


angular
  .module('app')
  .controller('MainCtrl', MainCtrl);  
  
  
  
  
//function MainCtrl($scope, $http) {
//
//    $scope.emaillist = [];
//
//    $scope.loadMail = function() {
//        var httpRequest = $http({
//            method: 'POST',
//            url: 'json/inbox.json',
//            data: mockDataForThisTest
//
//        }).success(function(data, status) {
//            $scope.emaillist = data;
//        });
//
//    };
//
//}  
//angular
//  .module('app')
//  .controller('MainCtrl', MainCtrl);
function mailcontentCtrl ($scope, $http) {
	
}
angular
  .module('app')
  .controller('mailcontentCtrl', mailcontentCtrl);
  
function homeCtrl ($scope, $http) {
	$scope.message = 'This is my anguler dashboard!';
  this.someObject = {};
  this.doSomething = function ($scope, $http) {
  $scope.message = 'This is my anguler dashboard!';
  };
}
angular
  .module('app')
  .controller('homeCtrl', homeCtrl);