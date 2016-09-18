'use strict';

/**
 * @ngdoc function
 * @name restFullSpringTestAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restFullSpringTestAngularApp
 */
angular.module('restFullSpringTestAngularApp')
    .controller('MainCtrl', function ($scope, greetingService) {
        $scope.url = greetingService.getUrl();

        $scope.test = greetingService.getGreeting();

    });