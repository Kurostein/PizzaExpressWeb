(function(){
  'use strict';

  const ClientCreateController = function($scope, $state){
    var vm = this;

    vm.client = {
      name: '',
      lastname: '',
      cpf: '',
      phone: '',
      address: {
        street: '',
        number: '',
        cep: '',
        district: '',
        city: '',
        state: ''
      },
      user: { 
        username: '', 
        password: '' 
      }
    };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){

    }

    function Cancel(){
      vm.user = {};
      $state.go('home');
    }
  };

  ClientCreateController.$inject = ['$scope', '$state'];

  angular.module('client.module').controller('ClientCreateController', ClientCreateController);
})();