angular.module('Routing')

.config(function($routeProvider) {
    //this runs automatically when the main module is created
    //routing happens here    
    $routeProvider
    .when('/', {
        templateUrl:'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:itemID', {
        templateUrl:'templates/details.html',
        controller: 'DetailsCtrl'

    })
    .otherwise({redirectTo: '/'});
})
