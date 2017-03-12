/**
 * Created by Administrator
 * on 2016/12/12.
 */
angular.module('App')
    .controller('ParkInfoController',function($scope,$http){
        $scope.parkInfoList = {};
        var userId = localStorage.getItem('username');
        console.log('登录得到userId：'+userId);
        $http.post('/parkuser/lockPlateInfoNew',getSignParams({userId:userId})).success(function (data) {
            if(data.flag == 1){
                console.log('登录得到userId：'+userId);
                $scope.parkInfoList = data.data;
            }else{
                console.log('登录得到userId：'+userId);
                console.log(data.msg);
                alert(data.msg);
            }

        })
    });