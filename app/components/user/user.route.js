(function(){
  'use strict';

  const Config = function($stateProvider){
    var userCreateState = {
      name: 'user/create',
      url: '/user/create',
      templateUrl: './app/components/user/create/user.create.view.html',
      controller: 'UserCreateController',
      controllerAs: 'vm'
    };

    $stateProvider.state(userCreateState);
  };

  Config.$inject = ['$stateProvider'];

  angular.module('user.module')
    .config(Config);
})();