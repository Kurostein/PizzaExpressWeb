(function(){
  'use strict';

  const ClientCreateController = function($scope, $state, httpMethodService){
    var vm = this;

    vm.client = {
      name: '',
      lastname: '',
      cpf: '',
      phone: '',
      street: '',
      number: '',
      cep: '',
      district: '',
      city: '',
      state: ''
    };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){
      httpMethodService.save('clients', vm.client)
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

  ClientCreateController.$inject = ['$scope', '$state', 'httpMethodService'];

  angular.module('client.module').controller('ClientCreateController', ClientCreateController);
})();