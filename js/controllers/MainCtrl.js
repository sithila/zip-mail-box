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


}


angular
  .module('app')
  .controller('MainCtrl', MainCtrl);  
  
function ProfileCtrl ($scope, $http) {
	
 $scope.profileinfo = {};
  $http.get('json/profile.json')
       .then(function(pdata){
          $scope.profileinfo = pdata.data;
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


}


angular
  .module('app')
  .controller('ProfileCtrl', ProfileCtrl);  

function ModalDemoCtrl ($scope, $modal, $http) {

  $scope.modal = {title: 'Title', content: 'Hello Modal<br />This is a multiline message!'};

  // Controller usage example
  //
   var myModal = $modal({template: 'modal.tpl.demo.html', show: false});
   $scope.showModal = function() {
     myModal.$promise.then(myModal.show);
   };
   $scope.hideModal = function() {
     myModal.$promise.then(myModal.hide);
   };

}
angular
  .module('app')
  .controller('ModalDemoCtrl', ModalDemoCtrl); 


function LoadEditProfile ($scope, $http) {
	
 $scope.profileinfoe = {};
  $http.get('json/profile.json')
       .then(function(pdata){
				  
          $scope.profileinfoe = pdata.data;
		  //$scope.newName = pdata.data[0].profile_name;                
        });
	   $scope.newdata = {};

	   
$scope.updateProfile = function(profileinfoe){
	//$scope.cachedVals.push($scope.profileinfoe.profile_name);
    //$scope.foo = '';
	 //$scope.items.push({text:$scope.profileinfoe.profile_name});
    //$scope.profileinfoe.profile_name = '';
	$scope.newdata = angular.copy(profileinfoe);
	
	//console.log('New Value from field 2: ' + id);
	//alert($scope.hello2.name);
	var data = $.param({
            json: JSON.stringify({
                profile_name: $scope.newdata.profile_name,
				email: $scope.newdata.email
            })
        });
	
    $scope.updateinfo = {};
	$http.post("json/editprofile", data).success(function(data, status) {
            $scope.newdata = data;
        });
	console.log('profile updated');
}
}
angular
  .module('app')
  .controller('LoadEditProfile', LoadEditProfile);

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