(function(){
  'use strict';

  const OrderController = function($scope, $state, $stateParams, httpMethodService){
    var vm = this;

    var product = $stateParams.product;
    var user = window.userLogged;
    vm.order = {
      name: user.name,
      cpf: user.cpf,
      phone: user.phone,
      address: '',
      district: '',
      complement: '',
      product: product.description,
      price: product.price
    };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){
      // httpMethodService.save('orders', vm.order)
      //   .then(function(data){
      //       console.log(data);
      //     })
      //     .catch(function(data){
      //       console.log(data);
      //       return;
      //     });
      window.app.service('orders').create(vm.order)
        .then(function(result){
          alert('Pedido cadastrado com sucesso!');
          $state.go('home');
        }).catch(function(result){
          alert('Erro ao cadastrar pedido...');
        });
    }

    function Cancel(){
      vm.user = {};
      $state.go('home');
    }
  };

  OrderController.$inject = ['$scope', '$state', '$stateParams', 'httpMethodService'];

  angular.module('order.module').controller('OrderController', OrderController);
})();