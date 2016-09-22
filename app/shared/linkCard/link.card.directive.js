(function(){
  'use strict';

  const SuiLinkCard = function(){
    return {
      restrict: 'E',
      scope: {
        header: '=header',
        img: '=img',
        imgAlt: '=imgAlt',
        ribbonLabel: '=ribbonLabel'
      },
      templateUrl: './app/shared/linkCard/link.card.view.html'
    };
  }

  angular.module('app.shared').directive('suiLinkCard', SuiLinkCard);
})();