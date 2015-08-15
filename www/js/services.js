var chemoCodes = angular.module('chemoCodes.services', []);

chemoCodes.factory('CodeStore', function ($http) {

    var codes = [];
    return {

        getCodes: function () {
            return $http.get("data/chemocodespriv.json").then(function (response) {
                codes = response.data;
                return codes;
            });
        },

        getCode: function (codeId) {

            for (var i = 0; i < codes.length; i++) {
                console.log('Codeid is ', codeId);
                if (codes[i].PBSCode === codeId) {
                    return codes[i];
                }
            }
            return undefined;
        },

    };
});
