(function(){
  'use strict';

  const Config = function($urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');
  };

  Config.$inject = ['$urlRouterProvider', '$locationProvider']

  angular.module('PizzaExpressApp').config(Config);
})();