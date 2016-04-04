/**
 * Created by pooja on 26/3/16.
 */

angular.module('women-WC16-Widget')

    .controller('WidgetCtrl',function($scope){

        var sendSMS = {
            title: "Send SMS",
            subject : "action Item SMS Example",
            body : "We are testing action Item send SMS",
            phoneNumber: "+918439703002",
            action: "sendSMS"
        };

        buildfire.datastore.save (sendSMS, 'actionItems' ,function(err,data){
            if(err){
                console.log("error")
            }
            else{
                console.log('resultiiiiiiiiiiii',data)
            }
        });

        buildfire.datastore.get('actionItems',function(err,data){
            $scope.actionItem = data.data;
            console.log("#############################33", data.data);
        });


        $scope.send = function(){
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!1")
            buildfire.actionItems.execute($scope.actionItem ,function(err,result){
                console.log("qwertyuio")
                if(err){
                    console.log("errorrrrrrrrrrrr",err);
                }
                else{
                    console.log('resultttttttttt',result);
                }

            })
        }

        //buildfire.actionItems.showDialog ('sendEmail' , function(err,data){
        //    console.log("yooooooooooooooooooooooooooooooooooooo")
        //   console.log(data);
        //});


        console.log("wooooooooooooooooooo")
    });

    //.controller('WidgetCtrl', ['$scope', 'teamResult', 'allMatches', 'resultByCode', 'groupResults', 'teams', function ($scope, teamResult, allMatches, resultByCode, groupResults, teams) {
    //
    //    $scope.dataValue = '';
    //
    //    /**
    //     * Get Data on the basis of the selection of radio button
    //     */
    //
    //    $scope.dataValueChanged = function () {
    //        switch ($scope.dataValue) {
    //            case 'A':
    //                teamResult.getData(function (data) {
    //                    $scope.result = data;
    //                });
    //                break;
    //            case 'B':
    //                allMatches.getData(function (data) {
    //                    $scope.result = data;
    //                });
    //                break;
    //            case 'C':
    //                resultByCode.getData(function (data) {
    //                    $scope.result = data;
    //                });
    //                break;
    //            case 'D':
    //                groupResults.getData(function (data) {
    //                    $scope.result = data;
    //                });
    //                break;
    //            case 'E':
    //                teams.getData(function (data) {
    //                    $scope.result = data;
    //                });
    //                break;
    //        }
    //
    //    };
    //
    //    $scope.flag = {
    //        allMatches: "",
    //        resultsByCountryCode: "",
    //        teamResults: "",
    //        groupResults: "",
    //        teams: ""
    //    };
    //
    //    /**
    //     * Get value of the Flags
    //     * @param data
    //     */
    //
    //    $scope.getFlags = function (data) {
    //        $scope.flag = data;
    //        if (!$scope.$$phase) {
    //            $scope.$digest();
    //        }
    //    };
    //
    //    /**
    //     * Get Flags from content using datastore
    //     * @type {buildfire.components.carousel.view}
    //     */
    //
    //    buildfire.datastore.get('Flag', function (err, data) {
    //        if (err)
    //            console.log('there was a problem retrieving your data');
    //        else{
    //            $scope.getFlags(data.data);
    //        }
    //
    //    });
    //
    //    /**
    //     * create new instance of buildfire carousel viewer
    //     * @type {buildfire.components.carousel.view}
    //     */
    //
    //    var view = new buildfire.components.carousel.view("#carousel", []);
    //
    //    /**
    //     * load items
    //     * @param carouselItems
    //     */
    //
    //    function loadItems(carouselItems) {
    //
    //        /**
    //         *  create an instance and pass it the items if you don't have items yet just pass []
    //         */
    //
    //        view.loadItems(carouselItems);
    //    }
    //
    //    /**
    //     * load any previously saved items
    //     */
    //
    //    buildfire.datastore.get(function (err, obj) {
    //        if (err)
    //            alert('error');
    //        else
    //            loadItems(obj.data.carouselItems)
    //    });
    //
    //    /**
    //     *  handle any updates by reloading
    //     */
    //
    //    buildfire.datastore.onUpdate(function (e) {
    //        if(e.tag == 'Flag'){
    //            $scope.getFlags(e.data)
    //        }
    //        else
    //        loadItems(e.obj.carouselItems);
    //    });

    //}]);
