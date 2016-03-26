/**
 * Created by pooja on 26/3/16.
 */


angular.module('women-WC16-Widget')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/Widget.html',
                controllerAs: 'Widget',
                controller: 'WidgetCtrl'
            })
            .otherwise('/');
    }]);
