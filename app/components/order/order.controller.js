(function(){
  'use strict';

  const OrderController = function($scope, $state, $stateParams, httpMethodService){
    var vm = this;

    var product = $stateParams.product;
    vm.order = {
      name: '',
      cpf: '',
      phone: '',
      address: '',
      district: '',
      complement: '',
      product: product.description,
      price: product.price
    };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){
      httpMethodService.save('orders', vm.order)
        .then(function(data){
            console.log(data);
          })
          .catch(function(data){
            console.log(data);
            return;
          });
          
      $state.go('home');
    }

    function Cancel(){
      vm.user = {};
      $state.go('home');
    }
  };

  OrderController.$inject = ['$scope', '$state', '$stateParams', 'httpMethodService'];

  angular.module('order.module').controller('OrderController', OrderController);
})();