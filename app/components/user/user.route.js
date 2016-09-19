(function(){
  'use strict';

  const Config = function($stateProvider){
    var userState = {
      name = 'user',
      url = '/user/login',
      templateUrl = '',
      controller = 'userLoginController',
      controllerAs = 'vm'
    };

    var userCreateState = {
      name = 'user.create',
      url = '/user/create',
      templateUrl = 'user.create.view.html',
      controller = 'userCreateController',
      controllerAs = 'vm'
    };

    $stateProvider.state(userState);
    $stateProvider.state(userCreateState);
  };

  angular.module('user.module')
    .config(Config);
})();