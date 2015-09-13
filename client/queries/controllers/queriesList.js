angular.module("socially").controller("QueriesListCtrl", ['$scope', '$meteor', '$mdDialog',
    function ($scope, $meteor, $mdDialog) {

        $scope.userId = function () {
            return Meteor.userId();
        };

        $scope.$meteorSubscribe('queries').then(function () {
            $scope.currentUserQueries = $meteor.collection(function () {
                return Queries.find({
                    $or: [
                        {
                            $and: [
                                {"public": true},
                                {"public": {$exists: true}}
                            ]
                        },
                        {
                            $and: [
                                {owner: Meteor.userId()},
                                {owner: {$exists: true}}
                            ]
                        }
                    ]
                });
            });

            $scope.otherUserQueries = $meteor.collection(function () {
                return Queries.find({
                    $or: [
                        {
                            $and: [
                                {"public": true},
                                {"public": {$exists: true}}
                            ]
                        },
                        {
                            $and: [
                                {owner: {$ne: Meteor.userId()}},
                                {owner: {$exists: true}}
                            ]
                        }
                    ]
                });
            });
        });
        //
        //$scope.answerQuestion = function(userId, query, answer){
        //  scope.currentUserQueries.update(query.answers[userId], answer);
        //};
        $scope.remove = function (query) {
            $scope.currentUserQueries.splice($scope.currentUserQueries.indexOf(query), 1);
        };

        $scope.removeAll = function () {
            $scope.currentUserQueries.remove();
        };

        $scope.userAnswer = function(query){
            return query.answers[$scope.userId()];
        };

        $scope.showUserAnswer = function(query) {
            return angular.isDefined($scope.userAnswer(query));
        };

        $scope.showAnswer = function (ev, query) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,        // use parent scope in template
                preserveScope: true,  // do not forget this if use parent scope
                //// Since GreetingController is instantiated with ControllerAs syntax
                //// AND we are passing the parent '$scope' to the dialog, we MUST
                //// use 'vm.<xxx>' in the template markup
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '    <md-input-container>' +
                '<label>Answer</label>' +
                '<input ng-model="query.answers[userId()]">' +
                '</md-input-container>' +
                '  </md-dialog-content>' +
                '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.query = query;
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        }}]);


