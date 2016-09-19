(function(){
  'use strict';

  const Config = function($stateProvider){
    var userState = {
      name: 'user',
      url: '/user/login',
      templateUrl: './app/components/user/login/user.login.view.html',
      controller: 'UserLoginController',
      controllerAs: 'vm'
    };

    var userCreateState = {
      name: 'user/create',
      url: '/user/create',
      templateUrl: './app/components/user/create/user.create.view.html',
      controller: 'UserCreateController',
      controllerAs: 'vm'
    };

    $stateProvider.state(userState);
    $stateProvider.state(userCreateState);
  };

  Config.$inject = ['$stateProvider'];

  angular.module('user.module')
    .config(Config);
})();