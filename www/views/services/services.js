var chemoCodes = angular.module('chemoCodes.services', ['chemoCodes']);

chemoCodes.factory('CodeStore', function ($http, $q, $ionicPopup) {

    var localDB;
    var remoteDB;
    var useCache = 0; //variable to set whether to call new data or use cache


    var codes = [];
    return {

        initDB: function () {
            console.log('initialising database');
            localDB = new PouchDB("chemocodes", {
                //    adapter: 'websql'
            });
            console.log(localDB.adapter);

            remoteDB = new PouchDB("https://day41.cloudant.com/chemocodes", {
                Authorization: 'Basic ZGF5NDE6ZGF5NDEyMzEw'
            });

            localDB.sync(remoteDB, {
                live: true,
                retry: true
            });

        },

        getCodes: function () {

            //            if (useCache === 0) {
            console.log('useCache = ', useCache);
            return $q.when(remoteDB.allDocs({
                    include_docs: true
                }))
                .then(function (docs) {

                    // Each row has a .doc object and we just want to send an
                    // array of codes objects back to the calling controller,
                    // so let's map the array to contain just the .doc objects.
                    //                    alert('Loading local PouchDB');
                    codes = docs.rows.map(function (row) {
                        return row.doc;
                    });

                    useCache = 1;
                    return codes;
                }).catch(function (error) {

                    console.log('Error = ', error);

                });
            //            } else {
            //                //return cached  data as a promise
            //                //                console.log('Refresh useCache = ', useCache);
            //                return $q.when(codes);
            //            }
        },

        getCode: function (codeId) {

            for (var i = 0; i < codes.length; i++) {
                //                console.log('Codeid is ', codeId);
                if (codes[i].Drug === codeId) {
                    return codes[i];
                }
            }
            return undefined;
        },

        deleteDB: function () {
            localDB.destroy().then(function (response) {
                // success
                console.log('Deleted ', response.ok);
                $ionicPopup.alert({
                    title: 'Table Delete Confirmation',
                    template: 'Table has been successfully deleted. Please restart the App.'
                });
            }).catch(function (err) {
                console.log(err);
                alert('Delete failed');
            });
        }
    };
});