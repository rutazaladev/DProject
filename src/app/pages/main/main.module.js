/**
 * @author l.azevedo
 * created on 29.07.2017
 */
(function() {
  'use strict';

  angular.module('DentalDesh.pages.main', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/pages/main/main.html',
        redirectTo: 'main.dashboard',
        authenticate: true


      });
  }

})();