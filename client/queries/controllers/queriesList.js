angular.module("socially").controller("QueriesListCtrl", ['$scope', '$meteor', '$mdDialog',
    function ($scope, $meteor) {

        $scope.answer = '';

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

        $scope.remove = function (query) {
            $scope.currentUserQueries.splice($scope.currentUserQueries.indexOf(query), 1);
        };

        $scope.removeAll = function () {
            $scope.currentUserQueries.remove();
        };

        $scope.userAnswer = function(query){
            var answer =  query.answers[$scope.userId()];
            if (angular.isUndefined(answer)){
                return '';
            }
            else
            {
                return answer.answer;
            }
        };

        $scope.showUserAnswer = function(query) {
            return angular.isDefined($scope.userAnswer(query));
        };

        $scope.showUserAnswer = function(query){
            return Object.keys(query.answers).length < query.responders || angular.isDefined(query.answers[Meteor.userId()]);

        };

        $scope.saveQuery = function(query, answer){
            var answerWithFeedback = {
              answer : answer,
                feedback : 0
            };

            //query.answers[$scope.userId()] = answerWithFeedback;
            //$meteor.call('saveAnswer', query, answerWithFeedback, $scope.userId());
            $meteor.call('date').then(function(date){
                answerWithFeedback.answerDate = date;
                query.answers[$scope.userId()] = answerWithFeedback;
            });
        };
}]);


