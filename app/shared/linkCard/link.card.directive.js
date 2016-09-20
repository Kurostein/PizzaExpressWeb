(function(){
  'use strict';

  const SuiLinkCard = function(){
    return {
      restrict: 'E',
      scope: {
        item: '=item'
      },
      templateUrl: './app/shared/linkCard/link.card.view.html'
    };
  }

  angular.module('app.shared').directive('suiLinkCard', SuiLinkCard);
})();