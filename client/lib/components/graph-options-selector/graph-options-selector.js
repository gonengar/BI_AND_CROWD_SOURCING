angular.module('socially').directive('graphOptionsSelector', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/graph-options-selector/graph-options-selector.ng.html',
        link: function (scope) {
            scope.graphOptions = ['Pie', 'Chart'];
        }
    };
});

