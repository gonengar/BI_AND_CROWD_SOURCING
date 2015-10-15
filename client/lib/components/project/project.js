angular.module('socially').directive('project', function (selectorService, $mdDialog, $meteor) {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/project/project.ng.html',
        link: function (scope) {
            var queries = $meteor.collection(Queries).subscribe('queries');
            scope.addSelectionObject = selectorService.addObject;
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
                    var query = {
                        selectedObjects: selectorService.getSelectedObjects(),
                        question: scope.question,
                        owner: Meteor.userId(),
                        responders: scope.responders || 0,
                        answers: {}
                    };

                    $meteor.call('saveQuery', query);
                }, function () {
                })
            };


            scope.isDisabled = function () {
                return selectorService.getCounter() < 2;
            }
        }
    };
});