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
                            },
                            {
                                "id": "cost-id",
                                "label": "Shipping",
                                "type": "number"
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
                                        "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"80\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_w.png\" height=\"12\" width=\"20\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 42 items</span> ",
                                        "p": {
                                            "className": "google-visualization-formatters-arrow-empty",
                                            "_bar_format_old_value": "42 items"
                                        }
                                    },
                                    {
                                        "v": 30,
                                        "f": "Ony 12 items",
                                        "p": {}
                                    },
                                    {
                                        "v": 7,
                                        "f": "7 servers",
                                        "p": {}
                                    },
                                    {
                                        "v": 4,
                                        "p": {
                                            "style": "color:white;background-color:#800080;"
                                        },
                                        "f": "$4,00"
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
                                        "p": {
                                            "className": "google-visualization-formatters-arrow-dr",
                                            "_bar_format_old_value": "13"
                                        },
                                        "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"55\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_w.png\" height=\"12\" width=\"45\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 13</span> "
                                    },
                                    {
                                        "v": 1,
                                        "f": "1 unit (Out of stock this month)",
                                        "p": {}
                                    },
                                    {
                                        "v": 30,
                                        "p": {}
                                    },
                                    {
                                        "v": 2,
                                        "p": {
                                            "style": "color:white;background-color:red;"
                                        },
                                        "f": "$2,00"
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
                                        "p": {
                                            "className": "google-visualization-formatters-arrow-ug",
                                            "_bar_format_old_value": "24"
                                        },
                                        "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"100\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 24</span> "
                                    },
                                    {
                                        "v": 5,
                                        "p": {}
                                    },
                                    {
                                        "v": 11,
                                        "p": {}
                                    },
                                    {
                                        "v": 6,
                                        "p": {
                                            "style": "color:black;background-color:#33ff33;"
                                        },
                                        "f": "$6,00"
                                    },
                                    null
                                ]
                            }
                        ]
                    },
                    "options": {
                        "title": "Sales per SASSSSSSSS",
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
                        "allowHtml": true,
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
                        ],
                        "bar": [
                            {
                                "columnNum": 1,
                                "width": 100
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
                            },
                            {
                                "id": "cost-id",
                                "label": "Shipping",
                                "type": "number"
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
                                        "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"80\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_w.png\" height=\"12\" width=\"20\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 42 items</span> ",
                                        "p": {
                                            "className": "google-visualization-formatters-arrow-empty",
                                            "_bar_format_old_value": "42 items"
                                        }
                                    },
                                    {
                                        "v": 12,
                                        "f": "Ony 12 items",
                                        "p": {}
                                    },
                                    {
                                        "v": 7,
                                        "f": "7 servers",
                                        "p": {}
                                    },
                                    {
                                        "v": 4,
                                        "p": {
                                            "style": "color:white;background-color:#800080;"
                                        },
                                        "f": "$4,00"
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
                                        "p": {
                                            "className": "google-visualization-formatters-arrow-dr",
                                            "_bar_format_old_value": "13"
                                        },
                                        "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"55\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_w.png\" height=\"12\" width=\"45\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 13</span> "
                                    },
                                    {
                                        "v": 1,
                                        "f": "1 unit (Out of stock this month)",
                                        "p": {}
                                    },
                                    {
                                        "v": 30,
                                        "p": {}
                                    },
                                    {
                                        "v": 2,
                                        "p": {
                                            "style": "color:white;background-color:red;"
                                        },
                                        "f": "$2,00"
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
                                        "p": {
                                            "className": "google-visualization-formatters-arrow-ug",
                                            "_bar_format_old_value": "24"
                                        },
                                        "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"100\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 24</span> "
                                    },
                                    {
                                        "v": 5,
                                        "p": {}
                                    },
                                    {
                                        "v": 11,
                                        "p": {}
                                    },
                                    {
                                        "v": 6,
                                        "p": {
                                            "style": "color:black;background-color:#33ff33;"
                                        },
                                        "f": "$6,00"
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
                        "allowHtml": true,
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
                        ],
                        "bar": [
                            {
                                "columnNum": 1,
                                "width": 100
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