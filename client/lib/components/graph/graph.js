angular.module('socially').directive('graph', function ($parse, selectorService) {
    return {
        restrict: 'E',
        templateUrl: 'client/lib/components/graph/graph.ng.html',
        link: function (scope, elem, attrs) {
            var selectedObjects = $parse(attrs.selectedObjects)(scope);
            scope.addSelectionObject = selectorService.addObject;

            scope.readyCbWrapper = function (chart) {
                chart.getChart().setSelection(selectedObjects);
            };

            scope.graphDepartments = function(){
                return scope.chartObject().departments[0] + ' & ' + scope.chartObject().departments[1];

            };

            var chartObjects = {
                Income: {
                    departments: ['HR', 'SALES']
                    ,
                    "type": "LineChart",
                    "displayed": true,
                    "data": {
                        "cols": [
                            {
                                "id": "month",
                                "label": "Month",
                                "type": "string",
                                "p": {}
                            },
                            {
                                "id": "laptop-id",
                                "label": "Laptop",
                                "type": "number",
                                "p": {}
                            },
                            {
                                "id": "desktop-id",
                                "label": "Desktop",
                                "type": "number",
                                "p": {}
                            },
                            {
                                "id": "server-id",
                                "label": "Server",
                                "type": "number",
                                "p": {}
                            }
                        ],
                        "rows": [
                            {
                                "c": [
                                    {
                                        "v": "January",
                                        "p": {}
                                    },
                                    {
                                        "v": 10000,
                                        "p": {}
                                    },
                                    {
                                        "v": 12000,
                                        "p": {}
                                    },
                                    {
                                        "v": 14000,
                                        "p": {}
                                    },
                                    null
                                ]
                            },
                            {
                                "c": [
                                    {
                                        "v": "February",
                                        "p": {}
                                    },
                                    {
                                        "v": 11000,
                                        "p": {}
                                    },
                                    {
                                        "v": 14000,
                                        "p": {}
                                    },
                                    {
                                        "v": 12000,
                                        "p": {}
                                    },
                                    null
                                ]
                            },
                            {
                                "c": [
                                    {
                                        "v": "March",
                                        "p": {}
                                    },
                                    {
                                        "v": 15000,
                                        "p": {}
                                    },
                                    {
                                        "v": 9000,
                                        "p": {}
                                    },
                                    {
                                        "v": 8000,
                                        "p": {}
                                    },
                                    null
                                ]
                            }
                        ]
                    },
                    "options": {
                        "title": "Income per month",
                        "fill": 20,
                        "displayExactValues": true,
                        "vAxis": {
                            "title": "Income",
                            "gridlines": {
                                "count": 10
                            }
                        },
                        selectionMode: 'multiple',
                        "hAxis": {
                            "title": "Date"
                        },
                        "tooltip": {
                            "isHtml": false
                        }
                    },
                    "formatters": {
                        "color": [
                            {
                                "columnNum": 4,
                                "formats": [
                                    {
                                        "from": 0,
                                        "to": 3,
                                        "color": "white",
                                        "bgcolor": "red"
                                    },
                                    {
                                        "from": 3,
                                        "to": 5,
                                        "color": "white",
                                        "fromBgColor": "red",
                                        "toBgColor": "blue"
                                    },
                                    {
                                        "from": 6,
                                        "to": null,
                                        "color": "black",
                                        "bgcolor": "#33ff33"
                                    }
                                ]
                            }
                        ],
                        "arrow": [
                            {
                                "columnNum": 1,
                                "base": 19
                            }
                        ],
                        "date": [
                            {
                                "columnNum": 5,
                                "formatType": "long"
                            }
                        ],
                        "number": [
                            {
                                "columnNum": 1,
                                "prefix": "$"
                            },
                            {
                                "columnNum": 2,
                                "prefix": "$"
                            },
                            {
                                "columnNum": 3,
                                "prefix": "$"
                            }
                        ]
                    },
                    "view": {}
                },
                Sales: {
                    departments: ['IT', 'SALES']
                    ,
                    "type": "LineChart",
                    "displayed": true,
                    "data": {
                        "cols": [
                            {
                                "id": "month",
                                "label": "Month",
                                "type": "string",
                                "p": {}
                            },
                            {
                                "id": "laptop-id",
                                "label": "Laptop",
                                "type": "number",
                                "p": {}
                            },
                            {
                                "id": "desktop-id",
                                "label": "Desktop",
                                "type": "number",
                                "p": {}
                            },
                            {
                                "id": "server-id",
                                "label": "Server",
                                "type": "number",
                                "p": {}
                            }
                        ],
                        "rows": [
                            {
                                "c": [
                                    {
                                        "v": "January",
                                        "p": {}
                                    },
                                    {
                                        "v": 19,
                                        "p": {}
                                    },
                                    {
                                        "v": 30,
                                        "p": {}
                                    },
                                    {
                                        "v": 7,
                                        "p": {}
                                    },
                                    null
                                ]
                            },
                            {
                                "c": [
                                    {
                                        "v": "February",
                                        "p": {}
                                    },
                                    {
                                        "v": 13,
                                        "p": {}
                                    },
                                    {
                                        "v": 1,
                                        "p": {}
                                    },
                                    {
                                        "v": 30,
                                        "p": {}
                                    },
                                    null
                                ]
                            },
                            {
                                "c": [
                                    {
                                        "v": "March",
                                        "p": {}
                                    },
                                    {
                                        "v": 24,
                                        "p": {}
                                    },
                                    {
                                        "v": 5,
                                        "p": {}
                                    },
                                    {
                                        "v": 11,
                                        "p": {}
                                    },
                                    null
                                ]
                            }
                        ]
                    },
                    "options": {
                        "title": "Sales per month",
                        "fill": 20,
                        "displayExactValues": true,
                        "vAxis": {
                            "title": "Sales unit",
                            "gridlines": {
                                "count": 10
                            }
                        },
                        selectionMode: 'multiple',
                        "hAxis": {
                            "title": "Date"
                        },
                        "tooltip": {
                            "isHtml": false
                        }
                    },
                    "formatters": {
                        "color": [
                            {
                                "columnNum": 4,
                                "formats": [
                                    {
                                        "from": 0,
                                        "to": 3,
                                        "color": "white",
                                        "bgcolor": "red"
                                    },
                                    {
                                        "from": 3,
                                        "to": 5,
                                        "color": "white",
                                        "fromBgColor": "red",
                                        "toBgColor": "blue"
                                    },
                                    {
                                        "from": 6,
                                        "to": null,
                                        "color": "black",
                                        "bgcolor": "#33ff33"
                                    }
                                ]
                            }
                        ],
                        "arrow": [
                            {
                                "columnNum": 1,
                                "base": 19
                            }
                        ],
                        "date": [
                            {
                                "columnNum": 5,
                                "formatType": "long"
                            }
                        ],
                        "number": [
                            {
                                "columnNum": 4,
                                "prefix": "$"
                            }
                        ]
                    },
                    "view": {}
                }
            };

            scope.chartObject = function(){
                var type = $parse(attrs.info)(scope);
                return chartObjects[type];
            };
        }};
});