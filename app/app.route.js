(function(){
  'use strict';

  const Config = function($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
  };

  Config.$inject = ['$urlRouterProvider']

  angular.module('PizzaExpressApp').config(Config);
})();