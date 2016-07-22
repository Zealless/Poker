module Poker {

  'use strict';

  var app = new PokerApp();

  angular
    .module("poker", app.dependencies)
    .config(["$stateProvider", "$urlRouteProvider", ($stateProvider: angular.ui.IStateProvider,
                                                    $urlRouterProvider:angular.ui.IUrlRouterProvider) => {
      app.configApp($stateProvider, $urlRouterProvider);
    }]).run(["$rootScope", "$state", ($rootScope, $state) => {

      $rootScope.$on("$stateChangeSuccess", (event, toState) => {

        var currentFunctionElement = document.getElementById("currentFunction");

        document.title = toState.pageTitle;

        if (currentFunctionElement) {
          currentFunctionElement.innerHTML = toState.pageTitle;
        }

      });

    }]);
};