(function() {
    'use strict';
    angular.module('sw', ["ui.router", "oc.lazyLoad"])
        .config(config)
        .run(run);

    config.$inject = ['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', '$provide', '$locationProvider'];

    function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider, $provide, $locationProvider) {
        $provide.decorator('$document', function($delegate) {
            $delegate.getReferrer = function() {
                return document.referrer;
            };
            return $delegate;
        });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/films');

        $stateProvider
            .state(
                "films", {
                    url: "/films",
                    templateUrl: 'app/components/films/directive/film-directive.tmpl',
                    resolve: {
                        meta: ['$rootScope', '$stateParams', '$location', function($rootScope, $stateParams, $location) {
                            var title = "Star Wars";
                            var description = "Star Wars";

                            $rootScope.meta = { title: title, description: description };
                        }],
                        load: function($ocLazyLoad) {

                            return $ocLazyLoad.load({
                                name: 'module1',
                                files: ['app/stores/js/StoreSearch.min.js', 'share/adaptive/js/storelocator-result.min.js', 'share/adaptive/css/storelocator-search.min.css', 'assets/store-search/js/StoreSearchResult.js']

                            });
                        }

                    }
                })
            .state(
                "film-details", {
                    url: "/films/:filmid",
                    templateUrl: 'app/components/films/directive/film-directive.tmpl',
                    resolve: {
                        meta: ['$rootScope', '$stateParams', '$location', function($rootScope, $stateParams, $location) {
                            var title = "Star Wars";
                            var description = "Star Wars";

                            $rootScope.meta = { title: title, description: description };
                        }],
                        load: function($ocLazyLoad) {

                            return $ocLazyLoad.load({
                                name: 'module1',
                                files: ['app/stores/js/StoreSearch.min.js', 'share/adaptive/js/storelocator-result.min.js', 'share/adaptive/css/storelocator-search.min.css', 'assets/store-search/js/StoreSearchResult.js']

                            });
                        }

                    }

                }
            });
});
