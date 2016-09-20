(function(){
  'use strict';

  const UserCreateController = function($scope, $state){
    var vm = this;

    vm.user = {
      nome: '',
      sobrenome: '',
      cpf: '',
      telefone: '',
      endereco: {
        logradouro: '',
        numero: '',
        cep: '',
        bairro: '',
        cidade: '',
        uf: ''
      },
      account: { 
        user: '', 
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

  UserCreateController.$inject = ['$scope', '$state'];

  angular.module('user.module').controller('UserCreateController', UserCreateController);
})();