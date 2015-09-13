angular.module("socially").run(["$rootScope", "$location", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $state.go("/queries");
    }
  });
}]);

angular.module("socially").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('queries', {
        url: '/queries',
        templateUrl: 'client/queries/views/queries-list.ng.html',
        controller: 'QueriesListCtrl'
      })
      .state('queryDetails', {
        url: '/queries/:queryId',
        templateUrl: 'client/queries/views/query-details.ng.html',
        controller: 'QueryDetailsCtrl',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

    $urlRouterProvider.otherwise("/queries");
  }]);