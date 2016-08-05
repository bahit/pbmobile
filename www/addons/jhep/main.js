// (C) Copyright 2015 Martin Dougiamas

angular.module('mm.addons.jhep', [])

.constant('mmaJhepPriority', 400)

.config(function($stateProvider, $mmSideMenuDelegateProvider, mmaJhepPriority) {

    $stateProvider
        .state('site.jhep', {
            url: '/jhep',
            views: {
                'site': {
                    controller: 'mmaJhepListCtrl',
                    templateUrl: 'addons/jhep/templates/list.html'
                }
            },
            params: {
                eventid: null,
                clear: false
            }
        });

    // Register side menu addon.
    $mmSideMenuDelegateProvider.registerNavHandler('mmaJhep', '$mmaJhepHandlers.sideMenuNav', mmaJhepPriority);

});
