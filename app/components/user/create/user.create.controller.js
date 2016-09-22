(function(){
  'use strict';

  const ClientCreateController = function($scope, $state, httpMethodService){
    var vm = this;

    vm.user = {
      username: '', 
      password: '',
      name: '',
      cpf: '',
      phone: ''
    };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){
      // httpMethodService.save('users', vm.user)
      // .then(function(data){
      //     console.log(data);
      //   })
      //   .catch(function(data){
      //     console.log(data);
      //     return;
      //   });
      window.app.service('users').create(vm.user)
        .then(function(result){
          alert('Usuário cadastrado com sucesso.');
          $state.go('home');
        })
        .catch(function(result){
          alert('Erro ao cadastrar usuário.')
        });      
    }

    function Cancel(){
      vm.user = {};
      $state.go('home');
    }
  };

  ClientCreateController.$inject = ['$scope', '$state', 'httpMethodService'];

  angular.module('user.module').controller('UserCreateController', ClientCreateController);
})();