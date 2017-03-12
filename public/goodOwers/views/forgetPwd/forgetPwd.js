/**
 * Created by zhouruiying
 * on 2016/12/12.
 */
angular.module('App')
    .controller('ForgetPwdController',function($scope,$http,$rootScope,$state){
        $('.codeSuccess').css({'display':'none'});
        $scope.ionGetCode = function(){
            console.log("userName:"+$scope.userName);
            console.log("$scope.phone:"+$scope.phone);
            $http.post('/parkUser/findPasswordCode',getSignParams({tel:$scope.phone})).success(function (data) {
                if(data.flag==1){
                    alert(data.msg);
                    $('.codeSuccess').css({'display':''});

                }else{
                    alert(data.msg);

                }
            });
        };
        $scope.ionResetPwd = function () {
          var opts = {
              password : $scope.newPwd,
              captcha : $scope.code,
              tel : $scope.phone,
              answer : $scope.answer
          };
          $http.post('/parkuser/resetPassword',getSignParams(opts)).success(function (data) {
              if(data.flag == 1){
                  alert(data.msg);
              }else{
                  alert(data.msg);
              }

          })
        };

    });