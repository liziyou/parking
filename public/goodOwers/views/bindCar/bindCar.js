/**
 * Created by Administrator
 * on 2016/12/12.
 */
angular.module('App')
.controller('BindCarController',function($scope,$http){
    $scope.carNumber1 = localStorage.getItem('carNumber1');
    $scope.carNumber2 = localStorage.getItem('carNumber2');
    $scope.carNumber3 = localStorage.getItem('carNumber3');

    $scope.binCar = function () {
        var opts = {
            licenseNumber : $scope.carNumber,
            userId  : localStorage.getItem('username')
        };
        if(!$scope.carNumber){
            alert('车牌号不能为空！');
        }
        $http.post('/parkuser/addPlate',getSignParams(opts)).success(function (data) {
            if(data.flag==1){
                console.info(data.msg);
                console.info(data.licenseNum);
                var count = data.licenseNum.length;
                if(count==1){
                    localStorage.setItem('carNumber1',data.licenseNum[0].plateNumber);
                    $scope.carNumber1 = localStorage.getItem('carNumber1');
                }

                if(count==2){
                    localStorage.setItem('carNumber1',data.licenseNum[0].plateNumber);
                    localStorage.setItem('carNumber2',data.licenseNum[1].plateNumber);
                    $scope.carNumber1 = localStorage.getItem('carNumber1');
                    $scope.carNumber2 = localStorage.getItem('carNumber2');
                }
                if(count==3){
                    localStorage.setItem('carNumber1',data.licenseNum[0].plateNumber);
                    localStorage.setItem('carNumber2',data.licenseNum[1].plateNumber);
                    localStorage.setItem('carNumber3',data.licenseNum[2].plateNumber);
                    $scope.carNumber1 = localStorage.getItem('carNumber1');
                    $scope.carNumber2 = localStorage.getItem('carNumber2');
                    $scope.carNumber3 = localStorage.getItem('carNumber3');
                }
            }else{
                console.info(data.msg);
                alert(data.msg);
            }
        });
    };
    $scope.removeCarNum = function () {
        console.info('======');
        // if(num==1){
        //     console.info('1');
        // }
        // if(num==2){
        //     console.info('2');
        //
        // }
        // if(num==3){
        //     console.info('3');
        // }
    }
    });