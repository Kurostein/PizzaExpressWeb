(function(){
  'use strict';

  const Config = function($stateProvider){
    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: './app/components/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    };

    $stateProvider.state(homeState);
  };

  Config.$inject = ['$stateProvider'];

  angular.module('home.module')
    .config(Config);
})();