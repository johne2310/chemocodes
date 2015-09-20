var chemoCodes = angular.module('list.controller', ['angular.filter']);

////////////////////////
//List view controller
////////////////////////
chemoCodes.controller('listCtrl', function ($scope, $state, $ionicPlatform, CodeStore, $ionicListDelegate, $ionicScrollDelegate, $ionicLoading) {


    $scope.codes = [];
    $scope.searchList = [];

    //get all codes from the database
    $ionicLoading.show({
        template: '<p class="item-icon-left">Loading drug list...<ion-spinner icon="lines" /></p>'
    });
    CodeStore.getCodes().then(function (data) {
            $scope.codes = data;
            $ionicLoading.hide();
            console.log('Array is ', $scope.codes);
            //            console.log('First Drug is ', $scope.codes[0].Drug);
        })
        .catch(function (error) {
            console.log('Error is ', error);
        });

    //    });

    $scope.doRefresh = function () {
        $scope.codes = [];
        CodeStore.getCodes().then(function (data) {
                console.log('useCache for refresh is ', useCache);
                $scope.codes = data;
            })
            .finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
    };


    $scope.dividerFunction = function (key) {
        return key;
    };

    // Client List: Client Search
    $scope.searchHandler = function () {
        var searchLength = $scope.searchList.length;
        if (searchLength === 0) {
            $ionicScrollDelegate.scrollTop(true);
            $scope.doRefresh();
        }
    };


    // Search button shortcuts
    $scope.clearSearch = function () {
        $scope.searchList = '';
        $scope.searchHandler();
    };

});
//end listCtrl
