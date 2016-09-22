(function(){
  'use strict';

  const Run = function(){
    var socket = io('http://192.168.174.128:4040/');
      var app = feathers()
        .configure(feathers.hooks())
        .configure(feathers.socketio(socket));

      window.app = app;
  };

  angular.module('PizzaExpressApp', 
  [
    'app.3rdParty',
    'app.shared',
    'app.module'
  ])
  .run(Run);
})();