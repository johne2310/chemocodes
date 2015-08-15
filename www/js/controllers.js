var chemoCodes = angular.module('chemoCodes.controllers', []);


//////////////////////////
//start controllers section
/////////////////////////

chemoCodes.controller('HomeCtrl', function ($scope) {});

////////////////////////
//List view controller
////////////////////////
chemoCodes.controller('listCtrl', function ($scope, $state, CodeStore) {
    $scope.codes = [];
    $scope.searchList = [];

    CodeStore.getCodes().then(function (data) {
        $scope.codes = data;
        $scope.fullList = true;
        $scope.filteredList = false;
    });

    // Client List: Client Search
    $scope.searchHandler = function () {
        var searchLength = $scope.searchList.length;
        if (searchLength === 0) {
            $scope.filteredList = false;
            $scope.fullList = true;
        } else {
            $scope.filteredList = true;
            $scope.fullList = false;
        }
    };

    // Search button shortcuts
    $scope.clearSearch = function () {
        $scope.searchList = '';
        $scope.searchHandler();
    };


    //find function
    $scope.findCancerType = function (event) {

        var searchID = event.target.id;
        $scope.data = {
            activeButton: searchID
        };

        switch (searchID) {

        case "Colorectal":
            $scope.searchList = 'Colorectal';
            $scope.data.activeButton = searchID;
            break;
        case "Lung":
            $scope.searchList = 'Lung';
            break;
        case "Breast":
            $scope.searchList = 'Breast';
            break;
        case "Prostate":
            $scope.searchList = 'Prostate';
            break;
        case "Ovarian":
            $scope.searchList = 'Ovarian';
            break;
        case "Leukaemia":
            $scope.searchList = 'Leukaemia';
            break;
        }

        $scope.searchHandler(); //switch to sorted list

    };

});
//end listCtrl



////////////////////////
//Detail view controller
////////////////////////
chemoCodes.controller('detailCtrl', function ($scope, $state, CodeStore) {

    console.log($state.params.codeId);
    $scope.code = CodeStore.getCode($state.params.codeId);
    console.log('New array is ', $scope.code);

});
//end detailCtrol


////////////////////////
//Codes view controller
////////////////////////

chemoCodes.controller('codesCtrl', function ($scope, $state, CodeStore) {
    console.log('State params = ', $state.params.codeId);
    $scope.detail = CodeStore.getCode($state.params.codeId);
    console.log('$scope.detail is: ', $scope.detail);
    //    $scope.detail = undefined;
    //    for (var i = 0; i < $scope.code.Details.length; i++) {
    //        if ($scope.code.Details[i].id2 === $state.params.detailId) {
    //            $scope.detail = $scope.code.Details[i];
    //            break;
    //        }
    //    }

});
// End codeCtrl


////////////////////////
//About view controller
////////////////////////

chemoCodes.controller('aboutCtrl', function ($scope) {

});
