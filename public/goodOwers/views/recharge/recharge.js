/**
 * Created by zhouruiying
 * on 2016/11/19.
 */

angular.module('App')
    .controller('RechargeController',function($scope,$http,$ionicPopover,$state){
        $scope.payType = '';
        $scope.ionWchatpay = function () {
            $scope.payType = 'wchatpay';
            console.log("传送type："+$scope.payType);
            $state.go('payType',{settingType:$scope.payType},{reload:true});
        };
        $scope.ionAlipay = function () {
            $scope.payType = 'alipay';
            console.log('传送type:'+$scope.payType);
            $state.go('payType',{settingType:$scope.payType},{reload:true});
        }

    });