(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'ngCookies'])
        .config(['$routeProvider', '$locationProvider', routes])
        .controller('HomeController', ['$cookies','$scope','$window', HomeController])
        .controller('AyudaController', ['$scope', AyudaController])
        .controller('NotFoundController', NotFoundController);

    function routes($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../../Views/Home/home.html',
                controller: 'HomeController'
            })
            .when('/ayuda', {
                templateUrl: '../../Views/Ayuda/ayuda.html',
                controller: 'AyudaController'
            })
            .when('/Servicios', {
                templateUrl: '',
                controller: 'ServiciosController'
            })
            .when('/404', {
                templateUrl: '../../Views/Shared/404.html',
                controller: 'NotFoundController'
            })
            .otherwise({ redirectTo: '/404' });

        $locationProvider.html5Mode(true);
    }

    function HomeController($cookies, $scope, $window) {

        var urlReturn = $cookies.get('urlReturn');

        $cookies.remove('urlReturn');

        if (urlReturn && urlReturn !== '/') {
            $window.location.href = urlReturn;
        }

        $scope.titulo = "estoy en home desde angular";
    }

    function AyudaController($scope) {
        $scope.titulo = "soy ayuda desde angular";
    }

    function ServiciosController($scope) {

    }

    function NotFoundController() {
    }

})();