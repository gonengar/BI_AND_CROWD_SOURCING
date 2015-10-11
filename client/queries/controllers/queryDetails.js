angular.module("socially").controller("QueryDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function ($scope, $stateParams, $meteor) {
        $scope.query = $meteor.object(Queries, $stateParams.queryId).subscribe('queries');
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
        $scope.putSelection = function(chart){
            console.log($scope.query.selectedObjects);
            chart.getChart().setSelection($scope.query.selectedObjects);

            console.log(chart.getChart().getSelection());
        };
        $scope.isUserQuery = function(userId){
            return userId == Meteor.userId();
        };

        $scope.formatDate = function(date){
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }

            function hourDisplay(date) {
                var d = date;
                var x = document.getElementById("demo");
                var h = addZero(d.getHours());
                var m = addZero(d.getMinutes());
                var s = addZero(d.getSeconds());
                return h + ":" + m + ":" + s;
            }

            if (angular.isUndefined(date)) return '';
            return hourDisplay(date)+' '+ addZero(date.getDay())+'.'+addZero(date.getMonth())+'.'+date.getFullYear();
        }
    }]);
