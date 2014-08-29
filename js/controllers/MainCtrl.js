function MainCtrl ($scope) {
	 $scope.mails = {
    emaillist: []
  };
  
 $scope.checkAll = function() {
    //$scope.user.emaillist = $scope.emaillist.map(function(item) { return item.mail_from; });
	$scope.mails.emaillist = [1,2,3,4,5];
	$( ".mailbox-action-topbar" ).show();
	//$scope.user.emaillist = angular.copy($scope.emaillist);
  };
  $scope.uncheckAll = function() {
    $scope.mails.emaillist = [];
	$( ".mailbox-action-topbar" ).hide();
  };
  $scope.checkFirst = function() {
    $scope.mails.emaillist.splice(0, $scope.mails.emaillist.length); 
    $scope.mails.emaillist.push(1);
	$( ".mailbox-action-topbar" ).show();
  };
  
  
	$scope.selectedEmail;
	 $scope.setselectedEmail = function(emaillist) {
		$scope.selectedEmail = emaillist;		
	 };
	 $scope.selectMailItem = function(emaillist) {
		
		 if(!$('#inner-content-div ul li input[type="checkbox"]').is(':checked')){
      console.log( "hello!" );
	  $( ".mailbox-action-topbar" ).hide();
	 
      return false;
    }
else{
	//$scope.selectedEmail = emaillist;
	 $( ".mailbox-action-topbar" ).show();	 
}
		
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
 
function LoginCtrl ($scope, $http, $location, authentication) {

  $scope.login = function() {
    if ($scope.username === 'admin' && $scope.password === 'pass') {
      console.log('successful')
      authentication.isAuthenticated = true;
      authentication.user = { name: $scope.username };
      $location.url("/home");
    } else {
      $scope.loginError = "Invalid username or password ";
      console.log('Login failed..');
    };
  };
  
  
  
} 
  
angular
  .module('app')
  .controller('LoginCtrl', LoginCtrl); 
  
function SignupCtrl ($scope, $http, $location) {
alert('signup');
//authentication.isAuthenticated = false;
  $scope.signup = function() {
   
      console.log('Login pass..');
	  $location.url("/signup");
    
  };
  
  
} 
  
angular
  .module('app')
  .controller('SignupCtrl', SignupCtrl); 
  

  
  
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
	//$scope.user = authentication.user.name;
	
	
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
	$scope.selectMailItem = function() {
		alert('ffhfhf');
       //$http.get('json/outbox.json')
//       .then(function(maildata){
//          $scope.emailinfo = maildata.data;
//		  //alert($scope.todos);                
//        });

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
	$scope.replingMail=false;
	$scope.reply = {};
	$scope.togglereplyMail = function() {
		$scope.replingMail = !$scope.replingMail;
		$scope.reply = {};
	}
	$scope.sendReply = function() {
		
		var data = $.param({
            json: JSON.stringify({
                to: $scope.reply.to,
				massage: $scope.reply.body
            })
        });
		$http.post("json/sentmail", data).success(function(data, status) {
            $scope.newdata = data;
        });
	console.log('sent mail');
		$scope.replingMail = !$scope.replingMail;
		$scope.reply = {};
	}
	
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
  
function indexController ($scope, $location, authService) {
	 $scope.logOut = function () {
        authService.logOut();
        $location.path('/');
    }

    $scope.authentication = authService.authentication;
}
angular
  .module('app')
  .controller('indexController', indexController);
  
  
function signupController ($scope, $location, $timeout, authService) {
	
	 $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
            startTimer();

        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = "Failed to register user due to:" + errors.join(' ');
         });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/');
        }, 2000);
    }

	
	
	
}
angular
  .module('app')
  .controller('signupController', signupController);
  
function loginController ($scope, $location, authService, ngAuthSettings) {

 $scope.loginData = {
        userName: "",
        password: "",
        useRefreshTokens: false
    };

    $scope.message = "";

    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {

            $location.path('/home');

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

    $scope.authExternalProvider = function (provider) {

        var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';

        var externalProviderUrl = ngAuthSettings.apiServiceBaseUri + "api/Account/ExternalLogin?provider=" + provider
                                                                    + "&response_type=token&client_id=" + ngAuthSettings.clientId
                                                                    + "&redirect_uri=" + redirectUri;
        window.$windowScope = $scope;

        var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
    };

    $scope.authCompletedCB = function (fragment) {

        $scope.$apply(function () {

            if (fragment.haslocalaccount == 'False') {

                authService.logOut();

                authService.externalAuthData = {
                    provider: fragment.provider,
                    userName: fragment.external_user_name,
                    externalAccessToken: fragment.external_access_token
                };

                $location.path('/associate');

            }
            else {
                //Obtain access token and redirect to orders
                var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };
                authService.obtainAccessToken(externalData).then(function (response) {

                    $location.path('/home');

                },
             function (err) {
                 $scope.message = err.error_description;
             });
            }

        });
    }



}
angular
  .module('app')
  .controller('loginController', loginController);

