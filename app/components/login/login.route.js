(function(){
  'use strict';

  const Config = function($stateProvider){
    var homeState = {
      name: 'login',
      url: '/login',
      templateUrl: './app/components/login/login.view.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    };

    $stateProvider.state(homeState);
  };

  Config.$inject = ['$stateProvider'];

  angular.module('login.module')
    .config(Config);
})();