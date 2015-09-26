angular.module('socially').service('selectorService', function () {
        var objects = [];

        this.getCounter = function () {
            return objects.length;
        };

        this.getSelectedObjects = function(){
            return objects;
        };

        this.addObject = function (selectedObjects) {
            objects = selectedObjects;
        };
    }
);

