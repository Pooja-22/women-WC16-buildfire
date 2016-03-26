/**
 * Created by pooja on 26/3/16.
 */

angular.module('women-WC16-Widget')

    .controller('WidgetCtrl', ['MainCtrl', function (MainCtrl) {

        ///create new instance of buildfire carousel viewer
        var view = new buildfire.components.carousel.view("#carousel", []);

        /// load items
        function loadItems(carouselItems) {
            // create an instance and pass it the items if you don't have items yet just pass []
            view.loadItems(carouselItems);
        }

        /// load any previously saved items
        buildfire.datastore.get(function (err, obj) {
            if (err)
                alert('error');
            else
                loadItems(obj.data.carouselItems)
        });

        /// handle any updates by reloading
        buildfire.datastore.onUpdate(function (e) {
            loadItems(e.obj.carouselItems);
        });
        console.log(MainCtrl,'frgthyjkilo;kjkhgfdf')

    }]);
