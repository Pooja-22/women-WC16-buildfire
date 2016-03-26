/**
 * Created by pooja on 22/3/16.
 */

angular.module('women-WC16')
    .controller('MainCtrl', ['$scope', 'teamResult', 'allMatches', 'resultByCode', 'groupResults', 'teams', function ($scope, teamResult, allMatches, resultByCode, groupResults, teams) {
        $scope.dataValue = '';

        $scope.dataValueChanged = function () {
            switch ($scope.dataValue) {
                case 'A':
                    teamResult.getData(function (data) {
                        $scope.result = data;
                    });
                    break;
                case 'B':
                    allMatches.getData(function (data) {
                        $scope.result = data;
                    });
                    break;
                case 'C':
                    resultByCode.getData(function (data) {
                        $scope.result = data;
                    });
                    break;
                case 'D':
                    groupResults.getData(function (data) {
                        $scope.result = data;
                    });
                    break;
                case 'E':
                    teams.getData(function (data) {
                        $scope.result = data;
                    });
                    break;
            }

        };

        $scope.change = function(){
            $scope.selected1 = false;

        };


        /// create a new instance of the buildfire carousel editor
        var editor = new buildfire.components.carousel.editor("#carousel");
        /// handle the loading
        function loadItems(carouselItems) {
            // create an instance and pass it the items if you don't have items yet just pass []
            editor.loadItems(carouselItems);
        }

        /// call buildfire datastore to see if there are any previously saved items
        buildfire.datastore.get(function (err, obj) {
            if (err)
                alert('error');
            else
                loadItems(obj.data.carouselItems)
        });
        /// save any changes in items
        function save(items) {
            console.log('saving...');
            buildfire.datastore.save({carouselItems: items}, function (e) {
                if (e)
                    alert("error");
                else
                    console.log('saved.');
            });
        }

        // this method will be called when a new item added to the list
        editor.onAddItems = function (items) {
            save(editor.items);
        };
        // this method will be called when an item deleted from the list
        editor.onDeleteItem = function (item, index) {
            save(editor.items);
        };
        // this method will be called when you edit item details
        editor.onItemChange = function (item) {
            save(editor.items);
        };
        // this method will be called when you change the order of items
        editor.onOrderChange = function (item, oldIndex, newIndex) {
            save(editor.items);
        };

    }]);
