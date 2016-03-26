/**
 * Created by pooja on 22/3/16.
 */

angular.module('women-WC16')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/Main.html',
                controllerAs: 'Main',
                controller: 'MainCtrl'
            })
            .otherwise('/');
    }]);