var chemoCodes = angular.module('chemoCodes', ['ionic', 'list.controller', 'detail.controller', 'chemoCodes.services', 'home.controller', 'about.controller', 'chemoCodes.directives']);

chemoCodes.run(function ($ionicPlatform, CodeStore) {
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
        CodeStore.initDB(); //initialise database
    });
});


chemoCodes.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "views/tabs/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'views/home/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('tab.list', {
        url: '/list',
        views: {
            'tab-list': {
                templateUrl: 'views/list/list.html',
                controller: 'listCtrl'
            }
        }
    })

    .state('tab.detail', {
        url: '/list/:codeId',
        views: {
            'tab-list': {
                templateUrl: 'views/detail/detail.html',
                controller: 'detailCtrl'
            }
        }
    })

    .state('tab.about', {
        url: '/about',
        views: {
            'tab-about': {
                templateUrl: 'views/about/about.html',
                controller: 'aboutCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});
