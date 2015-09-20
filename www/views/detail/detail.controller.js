var chemoCodes = angular.module('detail.controller', []);


////////////////////////
//Detail view controller
////////////////////////
chemoCodes.controller('detailCtrl', function ($scope, $state, CodeStore) {

    CodeStore.getCodes().then(function (data) {
        $scope.codes = data;
    });

    $scope.myFilter = $state.params.codeId;

    $scope.code = [];
    console.log('myFilter is ', $scope.myFilter);
    $scope.code = CodeStore.getCode($state.params.codeId);
    console.log('New detail array is ', $scope.code);
    console.log('Drug', $scope.code.Diagnosis);



    //find function
    $scope.findType = function (event) {

        var searchID = event.target.id;

        switch (searchID) {

        case "Colorectal":
            $scope.searchList = 'Colorectal';
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
    };

    // Search button shortcuts
    $scope.clearSearch = function () {
        $scope.searchList = '';
        //            $scope.searchHandler();
    };
}); //end detailController
