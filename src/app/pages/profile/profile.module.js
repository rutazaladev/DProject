/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('DentalDesh.pages.profile', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.profile', {
        url: '/profile',
        title: 'Profile',
        templateUrl: 'app/pages/profile/profile.html',
        controller: 'ProfilePageCtrl',
        authenticate: true
      });
  }

})();