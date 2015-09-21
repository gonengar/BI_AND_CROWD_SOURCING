angular.module("socially").controller("QueryDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function ($scope, $stateParams, $meteor) {
        $scope.query = $meteor.object(Queries, $stateParams.queryId).subscribe('queries');
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
    }]);
