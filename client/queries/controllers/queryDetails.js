angular.module("socially").controller("QueryDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function ($scope, $stateParams, $meteor) {
        $scope.query = $meteor.object(Queries, $stateParams.queryId).subscribe('queries');
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
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

        $scope.hasAnswers = function() {
            var hasAnswers = false;
            angular.forEach($scope.query.answers, function(){
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
    }]);
