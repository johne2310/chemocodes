var chemoCodes = angular.module('home.controller', []);

///////////////////////
//Home view controller
////////////////////////
chemoCodes.controller('HomeCtrl', function ($scope, $ionicHistory, CodeStore) {

    //Delete table (for test purposes only)
    $scope.deleteTable = function () {
        console.log('Delete started');
        CodeStore.deleteDB(); //call delete function from the factory
    };

});
