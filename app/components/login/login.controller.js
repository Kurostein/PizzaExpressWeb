(function(){
  'use strict';

  const LoginController = function($scope, $state){
    var vm = this;
    
    vm.user = { username: '', password: '' };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){

    }

    function Cancel(){
      vm.user = {};
      $state.go('home');
    }
  };

  LoginController.$inject = ['$scope', '$state'];

  angular.module('login.module').controller('LoginController', LoginController);
})();