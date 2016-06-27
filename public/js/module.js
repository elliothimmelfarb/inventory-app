'use strict';

let app = angular.module('myApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('create', {
      url: '/',
      templateUrl: '/pug/create.html',
      controller: 'createController'
    })
    .state('rUD', {
      url: '/rud',
      templateUrl: '/pug/rud.html',
      controller: 'rUDController'
    })
    $urlRouterProvider.otherwise('/');
});
