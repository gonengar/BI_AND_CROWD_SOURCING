angular.module('socially').directive('project', function (selectorService, $mdDialog, $meteor, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/project/project.ng.html',
        link: function (scope) {
            var queries = $meteor.collection(Queries).subscribe('queries');
            scope.addSelectionObject = selectorService.addObject;
            scope.showConfirm = function (ev) {
                var confirm = $mdDialog.confirm()
                    .parent(angular.element(document.body))
                    .title('Would you like to query the data?')
                    .content('The selected range ' + selectorService.getFirstObject().column + ',' + selectorService.getSecondObject().column + ' will be sent to the server for investigation')
                    .ok('Please do it!')
                    .cancel('Sounds like a scam')
                    .targetEvent(ev);

                $mdDialog.show(confirm).then(function () {
                    var query = {
                        range: {
                            firstObject: selectorService.getFirstObject().column,
                            secondObject: selectorService.getSecondObject().column
                        },
                        question: scope.question,
                        owner: Meteor.userId(),
                        answers: []
                    };
                    queries.push(query);
                }, function() {})
            };


            scope.isDisabled = function () {
                return selectorService.getCounter() != 2;
            }
        }
    };
});