function MainCtrl () {
	alert('main');
  this.someObject = {};
  this.doSomething = function () {
  
  };
}
angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
  
function homeCtrl () {
	alert('home');
  this.someObject = {};
  this.doSomething = function () {
  
  };
}
angular
  .module('app')
  .controller('homeCtrl', homeCtrl);