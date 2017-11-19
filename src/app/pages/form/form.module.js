/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('DentalDesh.pages.form', ['ui.select', 'ngSanitize'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.form', {
        url: '/form',
        template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        abstract: true,
        title: 'Forms',
        sidebarMeta: {
          icon: 'ion-compose',
          order: 250,
        },
        authenticate: true
      })
      .state('main.form.inputs', {
        url: '/form_1',
        templateUrl: 'app/pages/form/form_1/form_1.html',
        title: 'Form 1',
        sidebarMeta: {
          order: 0,
        },
        authenticate: true
      })
      .state('main.form.layouts', {
        url: '/form_2',
        templateUrl: 'app/pages/form/form_2/form_2.html',
        title: 'Form 2',
        sidebarMeta: {
          order: 100,
        },
        authenticate: true
      })
      .state('main.form.wizard', {
        url: '/form_3',
        templateUrl: 'app/pages/form/form_3/form_3.html',
        controller: 'WizardCtrl',
        controllerAs: 'vm',
        title: 'Form 3',
        sidebarMeta: {
          order: 200,
        },
        authenticate: true
      });
  }
})();