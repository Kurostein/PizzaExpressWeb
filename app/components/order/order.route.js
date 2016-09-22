(function(){
  'use strict';

  const Config = function($stateProvider){
    var orderState = {
      name: 'order',
      url: '/order',
      params: {
        product: null
      },
      templateUrl: './app/components/order/order.view.html',
      controller: 'OrderController',
      controllerAs: 'vm'
    };

    $stateProvider.state(orderState);
  };

  Config.$inject = ['$stateProvider'];

  angular.module('order.module')
    .config(Config);
})();