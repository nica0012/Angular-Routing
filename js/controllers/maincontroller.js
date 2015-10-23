var app = angular.module('Routing')


.controller('MainCtrl', function($scope, $http, Items) {
 //fetch data from the JSON file then display it
    
    $scope.allData;
    
    Items.getAll()
    
    //$http({method:'GET', url:'data/items.json'})
    .then(function(response){
        //success
        $scope.allData = response.data
    
    }, function(response){
        //error
    
    });
    
    
});