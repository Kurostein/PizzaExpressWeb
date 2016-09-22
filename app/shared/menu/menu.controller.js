(function(){
  'use strict';

  const MenuController = function($rootScope){
    var vm = this;
    vm.isLogged = false;
    vm.logout = Logout;
    
    $rootScope.$on('Logged', function(isLogged){
      vm.isLogged = isLogged;
    });

    function Logout(){
      window.isLogged = false;
      window.userLogged = {};
      location.reload();
    }

  };

  MenuController.$inject = ['$rootScope'];

  angular.module('app.shared').controller('MenuController', MenuController);
})();