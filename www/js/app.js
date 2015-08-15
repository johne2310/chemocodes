var chemoCodes = angular.module('chemoCodes', ['ionic', 'chemoCodes.controllers', 'chemoCodes.services', 'chemoCodes.directives']);

chemoCodes.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
});

chemoCodes.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('tab.list', {
            url: '/list',
            views: {
                'tab-list': {
                    templateUrl: 'templates/tab-list.html',
                    controller: 'listCtrl'
                }
            }
        })
//        .state('tab.drug', {
             //            url: '/list/:codeId',
             //            views: {
             //                'tab-list': {
             //                    templateUrl: 'templates/tab-drug.html',
             //                    controller: 'detailCtrl'
             //                }
             //            }
             //        })
        .state('tab.detail', {
            url: '/list/:codeId',
            views: {
                'tab-list': {
                    templateUrl: 'templates/tab-detail.html',
                    controller: 'codesCtrl'
                }
            }
        })
        .state('tab.about', {
            url: '/about',
            views: {
                'tab-about': {
                    templateUrl: 'templates/tab-about.html',
                    controller: 'aboutCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});
