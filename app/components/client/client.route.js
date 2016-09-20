(function(){
  'use strict';

  const Config = function($stateProvider){
    var clientState = {
      name: 'client',
      url: '/client/login',
      templateUrl: './app/components/client/login/client.login.view.html',
      controller: 'ClientLoginController',
      controllerAs: 'vm'
    };

    var clientCreateState = {
      name: 'client/create',
      url: '/client/create',
      templateUrl: './app/components/client/create/client.create.view.html',
      controller: 'ClientCreateController',
      controllerAs: 'vm'
    };

    $stateProvider.state(clientState);
    $stateProvider.state(clientCreateState);
  };

  Config.$inject = ['$stateProvider'];

  angular.module('client.module')
    .config(Config);
})();