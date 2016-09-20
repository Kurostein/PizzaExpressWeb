(function(){
  'use strict';

  const HomeController = function($scope){
    var vm = this;

    vm.cards = [
      {
        header: 'Pizza grande - 4 Queijos',
        imgLink: './app/assets/img/4queijos.png',
        alt: '4 Queijos',
        ribbonLabel: 'R$ 22,00'
      },
      {
        header: 'Pizza grande - Calabresa',
        imgLink: './app/assets/img/calabresa.png',
        alt: 'Calabresa',
        ribbonLabel: 'R$ 20,99'
      },
      {
        header: 'Pizza grande - Portuguesa',
        imgLink: './app/assets/img/portuguesa.png',
        alt: 'Portuguesa',
        ribbonLabel: 'R$ 25,00'
      },
      {
        header: 'Pizza média - America',
        imgLink: './app/assets/img/america.png',
        alt: 'America',
        ribbonLabel: 'R$ 27,00'
      },
      {
        header: 'Pizza média - Frango Grelhado',
        imgLink: './app/assets/img/frango_grelhado.png',
        alt: 'Frango Grelhado',
        ribbonLabel: 'R$ 23,99'
      },
      {
        header: 'Pizza média - Catuperoni',
        imgLink: './app/assets/img/catuperoni.png',
        alt: 'Catuperoni',
        ribbonLabel: 'R$ 25,50'
      }
    ];
  };

  HomeController.$inject = ['$scope'];

  angular.module('home.module').controller('HomeController', HomeController);
})();