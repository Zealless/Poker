var Poker;
(function (Poker) {
    'use strict';
    var app = new Poker.PokerApp();
    angular
        .module("poker", app.dependencies)
        .config(["$stateProvider", "$urlRouteProvider", function ($stateProvider, $urlRouterProvider) {
            app.configApp($stateProvider, $urlRouterProvider);
        }]).run(["$rootScope", "$state", function ($rootScope, $state) {
            $rootScope.$on("$stateChangeSuccess", function (event, toState) {
                var currentFunctionElement = document.getElementById("currentFunction");
                document.title = toState.pageTitle;
                if (currentFunctionElement) {
                    currentFunctionElement.innerHTML = toState.pageTitle;
                }
            });
        }]);
})(Poker || (Poker = {}));
;
