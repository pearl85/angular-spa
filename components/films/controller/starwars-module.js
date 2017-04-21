var starWars = angular.module('sw', []);
starWars.controller('starWarsController', starWarsFun);
starWars.directive('film', function() {
    return {
        restrict: "A",
        templateUrl: 'film-directive.html'
    };
});

starWarsFun.$inject = ['$scope', '$rootScope', '$http', '$compile'];

function starWarsFun($scope, $rootScope, $http, $compile) {
    $http.get("https://swapi.co/api/films/")
        .then(function(response) {
            $scope.starwars = response.data;
        });
}
