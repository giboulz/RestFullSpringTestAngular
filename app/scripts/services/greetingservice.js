'use strict';

/**
 * @ngdoc service
 * @name restFullSpringTestAngularApp.greetingService
 * @description
 * # greetingService
 * Factory in the restFullSpringTestAngularApp.
 */
angular.module('restFullSpringTestAngularApp')
    .factory('greetingService', function ($resource) {
        // Service logic
        // ...
        //var urlDev = 'http://localhost:8080/gs-rest-service/greeting';
        var urlDev = 'http://localhost:8080/gs-rest-service/greeting-javaconfig';
        //var urlRec = 'http://localhost:8181/RestFullTest/greeting';


        var greeting = $resource(urlDev);


        // Public API here
        return {
            getUrl: function () {
                return urlDev;
            },
            getGreeting: function () {
                return greeting.get();
            }

        };
    });