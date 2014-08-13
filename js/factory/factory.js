function AnotherService () {

  var AnotherService = {};
  
  AnotherService.someValue = '';

  AnotherService.someMethod = function () {

  };
  
  return AnotherService;
}
angular
  .module('app')
  .factory('AnotherService', AnotherService);