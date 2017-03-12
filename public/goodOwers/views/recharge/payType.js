/**
 * Created by zhouruiying
 * on 16-12-20.
 */

angular.module('App')
    .controller('payTypeController',function ($scope,$state,$stateParams,$http) {
        var settingType = $stateParams.settingType;
        console.log("得到的值"+settingType);
        $scope.viewType = settingType;
        $scope.nextConfirm = function () {
            $state.go('confirmCount',{},{reload:true});
        };
        $scope.ionMoney = function (obj) {
            $('#clickMoney').val(''+obj);
        };
    });