(function(){
  'use strict';

  const Config = function($stateProvider){
    var homeState = {
      name = 'home',
      url = '/home',
      templateUrl = 'home.view.html',
      controller = 'homeController',
      controllerAs = 'vm'
    };

    $stateProvider.state(homeState);
  };

  angular.module('home.module')
    .config(Config);
})();