function SomeService ( $http, $q ) {
	var deferred = $q.defer();
	$http.get('json/inbox.json')
       .then(function(data){
			deferred.resolve(data);		  
         // $scope.topvalues = data.data;
		  //alert($scope.todos);                
        });
  this.getTeams = function(){
        return deferred.promise;
    };
}
angular
  .module('app')
  .service('SomeService', SomeService);
  
