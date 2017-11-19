(function() {
  'use strict';

  angular.module('DentalDesh.pages.authSignUp', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('authSignUp', {
        url: '/authSignUp',
        templateUrl: 'app/pages/authSignUp/authSignUp.html',
        title: 'My Page',
        controller: 'authSignUpCtrl',
        sidebarMeta: {
          order: 800,
        },
        authenticate: false
      });
  }

})();