angular.module("socially").controller("QueriesListCtrl", ['$scope', '$meteor', '$mdBottomSheet',
    function ($scope, $meteor, $mdBottomSheet) {

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

        $scope.userAnswer = function (query) {
            var answer = query.answers[$scope.userId()];
            if (angular.isUndefined(answer)) {
                return '';
            }
            else {
                return answer;
            }
        };

        $scope.showUserAnswer = function (query) {
            return angular.isDefined($scope.userAnswer(query).answer);
        };

        $scope.showUserAnswer = function (query) {
            return $scope.numberOfAnswers(query) < query.responders || $scope.hasUserAnswered(query);

        };

        $scope.numberOfAnswers = function(query) {
            return Object.keys(query.answers).length
        };

        $scope.hasUserAnswered = function(query){
            return angular.isDefined(query.answers[Meteor.userId()])
        };

        $scope.createQuery = function ($event) {
            $mdBottomSheet.show({
                template: '<md-bottom-sheet><project></project></md-bottom-sheet>',
                targetEvent: $event
            });
        };

        $scope.openGraph = function ($event, selectedObjects, query) {

            var graphScope = $scope.$new();
            graphScope.query = query;
            graphScope.selectedObjects = selectedObjects;
            var answerTemplate = '<div><md-input-container><label>Answer:{{userAnswer(query).answer}}</label> <input ng-model="answer"> </md-input-container> <md-button ng-click="saveQuery(query, answer)" class="md-primary">Save</md-button> </div>'
            var graphTemplate = '<graph selected-objects="selectedObjects"></graph>';
            var totalTemplate = '<md-bottom-sheet>' + graphTemplate + answerTemplate + '</md-bottom-sheet>';
            $mdBottomSheet.show({
                template: totalTemplate,
                targetEvent: $event,
                scope: graphScope
            });
        };

        $scope.openDetails = function($event ,query){
            var detailsScope = $scope.$new();
            detailsScope.query = query;
            $mdBottomSheet.show({
                template: '<query-details query="query"></query-details>',
                targetEvent: $event,
                scope: detailsScope
            });
        };

        $scope.saveQuery = function (query, answer) {
            var answerWithFeedback = {
                answer: answer,
                feedback: 0
            };

            $meteor.call('date').then(function (date) {
                answerWithFeedback.answerDate = date;
                query.answers[$scope.userId()] = answerWithFeedback;
            });
        };
    }]);


