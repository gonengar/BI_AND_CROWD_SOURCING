angular.module('socially').service('selectorService', function () {
        var counter, firstObject, secondObject;
        counter = 0;
        firstObject = undefined;
        secondObject = undefined;

        this.getFirstObject = function () {
            return firstObject;
        }

        this.getSecondObject = function () {
            return secondObject;
        }

        this.getCounter = function () {
            return counter;
        }

        this.addObject = function (object) {
            if (counter === 0) {
                firstObject = object;
                counter++;
            }
            else if (counter === 1) {
                secondObject = object;
                counter++;
            }
            else if (counter === 2) {
                counter = 1;
                firstObject = object;
            }
        }
    }
);

