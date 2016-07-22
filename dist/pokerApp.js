var Poker;
(function (Poker) {
    "use strict";
    var PokerApp = (function () {
        function PokerApp() {
            this.dependencies = null;
            this.dependencies = [
                "ui.router",
                "ngRoute",
                "ngAnimate",
                "ngTouch",
                "ngMaterial"
            ];
        }
        PokerApp.prototype.configApp = function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("poker", {
                url: "/poker",
                templateUrl: "src/components/poker.html",
                pageTitle: "Poker"
            });
            $urlRouterProvider
                .otherwise("/poker");
        };
        return PokerApp;
    }());
    Poker.PokerApp = PokerApp;
})(Poker || (Poker = {}));
