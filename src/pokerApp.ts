module Poker {
    "use strict";

    export class PokerApp {

        public dependencies: string[] = null;

        public constructor() {
            this.dependencies = [
                "ui.router",
                "ngRoute",
                "ngAnimate",
                "ngTouch",
                "ngMaterial"
            ];
        }

        public configApp($stateProvider: angular.ui.IStateProvider,
                            $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            $stateProvider

                .state("poker", <angular.ui.IState>{
                    url: "/poker",
                    templateUrl: "src/components/poker.html",
                    pageTitle: "Poker"
                });

            $urlRouterProvider
                .otherwise("/poker");
        }
    }
}