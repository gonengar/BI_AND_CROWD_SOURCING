angular.module('socially').directive('graphMenu', function ($mdDialog, $meteor, selectorService, $mdBottomSheet) {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/graph-menu/graph-menu.ng.html',
        link: function (scope) {
            scope.graphInfo = 'Sales';
            var queries = $meteor.collection(Queries).subscribe('queries');
            scope.responders = 1;
            scope.showConfirm = function (ev) {
                var confirm = $mdDialog.confirm()
                    .parent(angular.element(document.body))
                    .title('Would you like to query the data?')
                    .content('The selected range will be sent to the server for investigation')
                    .ok('OK')
                    .cancel('Cancel')
                    .targetEvent(ev);

                $mdDialog.show(confirm).then(function () {
                    var departments;
                    if (scope.graphInfo === 'Income'){
                        departments = ['HR', 'Sales'];
                    }
                    else
                    if (scope.graphInfo === 'Sales'){
                        departments = ['IT', 'Sales'];
                    }
                    var query = {
                        selectedObjects: selectorService.getSelectedObjects(),
                        question: scope.question,
                        owner: Meteor.userId(),
                        responders: scope.responders || 0,
                        answers: {},
                        graphInfo: scope.graphInfo,
                        departments: departments
                    };

                    $meteor.call('saveQuery', query);
                    $mdBottomSheet.hide();
                })
            };


            scope.isDisabled = function () {
                return selectorService.getCounter() < 2;
            }
        }
    };
});