/**
 * @author v.lugovsky
 * created on 10.12.2016
 */
(function () {
  'use strict';

  angular.module('DentalDesh.theme.inputs')
      .directive('baSwitcher', baSwitcher);

  /** @ngInject */
  function baSwitcher() {
    return {
      templateUrl: 'app/theme/form_1/baSwitcher/baSwitcher.html',
      scope: {
        switcherStyle: '@',
        switcherValue: '='
      }
    };
  }

})();
