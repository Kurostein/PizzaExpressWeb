(function(){
  'use strict';

  const ClientCreateController = function($scope, $state, httpMethodService){
    var vm = this;

    vm.user = {
      username: '', 
      password: ''
    };

    vm.submit = Submit;
    vm.cancel = Cancel;

    function Submit(){
      httpMethodService.save('users', vm.user)
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

  angular.module('user.module').controller('UserCreateController', ClientCreateController);
})();