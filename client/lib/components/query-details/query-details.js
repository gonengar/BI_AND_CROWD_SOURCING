angular.module("socially").directive('queryDetails', function ($meteor, $mdBottomSheet) {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/query-details/query-details.ng.html',
        scope: {
            query: '=',
            queries: '='
        },
        link: function ($scope) {
            $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
            $scope.newQuestion = $scope.query.question;

            $scope.putSelection = function (chart) {
                chart.getChart().setSelection($scope.query.selectedObjects);
            };

            $scope.isUserQuery = function (userId) {
                return userId == Meteor.userId();
            };

            $scope.rephrase = function () {
                $scope.query.question = $scope.newQuestion;
                $scope.query.answers = {};
            };

            $scope.approveQuery = function() {
                $mdBottomSheet.hide();
                angular.forEach($scope.query.answers, function(answer, userId){
                    var answerTimeDiffMs = answer.answerDate - $scope.query.createDate;
                    var answerTimeDiffMins = Math.round(((answerTimeDiffMs % 86400000) % 3600000) / 60000);
                    $meteor.call('saveAnswerProperties', userId, answer.feedback, answerTimeDiffMins);
                });
                $scope.queries.splice($scope.queries.indexOf($scope.query), 1);
            };

            $scope.numberOfAnswers = function () {
                return Object.keys($scope.query.answers).length;
            };

            $scope.hasAnswers = function () {
                var hasAnswers = false;
                angular.forEach($scope.query.answers, function () {
                    hasAnswers = true;
                });
                return hasAnswers;
            };

            $scope.formatDate = function (date) {
                function addZero(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                }

                function hourDisplay(date) {
                    var d = date;
                    var h = addZero(d.getHours());
                    var m = addZero(d.getMinutes());
                    var s = addZero(d.getSeconds());
                    return h + ":" + m + ":" + s;
                }

                if (angular.isUndefined(date)) return '';
                return hourDisplay(date) + ' ' + addZero(date.getDay()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear();
            }
        }
    }
});