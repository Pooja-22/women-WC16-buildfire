/**
 * Created by pooja on 22/3/16.
 */

angular.module('women-WC16')

    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.flag = {
            allMatches: "",
            resultsByCountryCode: "",
            teamResults: "",
            groupResults: "",
            teams: ""
        };

        /**
         * Get value of the Flags
         * @param data
         */

        $scope.getFlags = function (data) {
            $scope.flag = data;
            if (!$scope.$$phase) {
                $scope.$digest();
            }
        };

        /**
         * Save Checkbox Flag in datastore
         * @param flag
         */

        $scope.saveFlags = function () {
            flag = $scope.flag;
            buildfire.datastore.save(flag, "Flag", function (err, data) {
                if (err)
                    console.log('there was a problem saving your data');
                else
                    console.log('your data has saved successfully');
            });
        };

        /**
         * Get Value of flag
         */

        buildfire.datastore.get('Flag', function (err, data) {
            if (err)
                console.log('there was a problem retrieving your data');
            else{
                $scope.getFlags(data.data);
            }

        });

        /**
         *  create a new instance of the buildfire carousel editor
         * @type {buildfire.components.carousel.editor}
         */

        var editor = new buildfire.components.carousel.editor("#carousel");

        /**
         * Handle the loading
         * @param carouselItems
         */

        function loadItems(carouselItems) {

            /**
             * create an instance and pass it the items if you don't have items yet just pass []
             */

            editor.loadItems(carouselItems);
        }

        /**
         * call buildfire datastore to see if there are any previously saved items
         */

        buildfire.datastore.get(function (err, obj) {
            if (err)
                alert('error');
            else
                loadItems(obj.data.carouselItems)
        });

        /**
         * Save any changes in item
         * @param items
         */

        function save(items) {
            buildfire.datastore.save({carouselItems: items}, function (e) {
                if (e)
                    alert("error");
                else
                    console.log('saved.');
            });
        }

        /**
         *  this method will be called when a new item added to the list
         * @param items
         */

        editor.onAddItems = function (items) {
            save(editor.items);
        };

        /**
         * this method will be called when an item deleted from the list
         * @param item
         * @param index
         */

        editor.onDeleteItem = function (item, index) {
            save(editor.items);
        };

        /**
         * this method will be called when you edit item details
         * @param item
         */

        editor.onItemChange = function (item) {
            save(editor.items);
        };

        /**
         * This method will be called when you change the order of items
         * @param item
         * @param oldIndex
         * @param newIndex
         */

        editor.onOrderChange = function (item, oldIndex, newIndex) {
            save(editor.items);
        };

    }]);
