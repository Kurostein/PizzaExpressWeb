(function(){
  'use strict';

  const HomeController = function($scope, $state){
    var vm = this;
    vm.order = Order;

    vm.products = [
      {
        description: 'Pizza grande - 4 Queijos',
        img: './app/assets/img/4queijos.png',
        price: 'R$ 22,00'
      },
      {
        description: 'Pizza grande - Calabresa',
        img: './app/assets/img/calabresa.png',
        price: 'R$ 20,99'
      },
      {
        description: 'Pizza grande - Portuguesa',
        img: './app/assets/img/portuguesa.png',
        price: 'R$ 25,00'
      },
      {
        description: 'Pizza média - America',
        img: './app/assets/img/america.png',
        price: 'R$ 27,00'
      },
      {
        description: 'Pizza média - Frango Grelhado',
        img: './app/assets/img/frango_grelhado.png',
        price: 'R$ 23,99'
      },
      {
        description: 'Pizza média - Catuperoni',
        img: './app/assets/img/catuperoni.png',
        price: 'R$ 25,50'
      }
    ];

    function Order(product){
      $state.go('order', { product: product });
    }

  };  

  HomeController.$inject = ['$scope', '$state'];

  angular.module('home.module').controller('HomeController', HomeController);
})();