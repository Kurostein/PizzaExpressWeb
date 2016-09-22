(function(){
  'use strict';

  const LoginController = function($scope, $state){
    var vm = this;
    
    vm.user = { username: '', password: '' };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){
      window.app.service('users')
        .find({
          query: vm.user
        }).then(function(result){
          if(result.data.length > 0){
            window.isLogged = true;
            window.userLogged = result.data[0];
            $scope.$emit('Logged', true);
            $state.go('home');
            alert('Usuário logado com sucesso!');
          }else{
            alert('Usuário ou senha inválido.');
          }
        }).catch(function(err){
          alert('Usuário não encontrado.');
        });
    }

    function Cancel(){
      vm.user = {};
      $state.go('home');
    }
  };

  LoginController.$inject = ['$scope', '$state'];

  angular.module('login.module').controller('LoginController', LoginController);
})();