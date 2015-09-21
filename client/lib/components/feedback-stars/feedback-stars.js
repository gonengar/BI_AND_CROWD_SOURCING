angular.module('socially').directive('feedbackStars', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/feedback-stars/feedback-stars.ng.html',
        scope: {
            answer: '='
        },
        link: function (scope) {
            scope.setFeedback = function (userFeedback) {
                scope.answer.feedback = userFeedback;
            };

            scope.feedbackStar = function (starNumber) {
                if (scope.answer.feedback < starNumber) {
                    return 'fa fa-star-o';
                }
                else {
                    return 'fa fa-star';
                }
            }
        }
    };
});