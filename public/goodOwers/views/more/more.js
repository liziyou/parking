/**
 * Created by zhouruiying
 * on 2016/12/7.
 */
angular.module('App')
    .controller('MoreController',function($scope,Currencies,$state){
        $scope.goLogin = function(){
            $state.go('login',{},{reload:true});
        }
        $scope.currencies = Currencies;
        $scope.state = {
            reordering:false
        };

        $scope.$on('$stateChangeStart',function(){
            $scope.state.reordering = false;
        });
        $scope.move = function(currency,fromIndex,toIndex){
            $scope.currencies.splice(fromIndex,1);
            $scope.currencies.splice(toIndex,0,currency);
        };
        $scope.loginOut = function () {
            localStorage.removeItem('password');
            localStorage.removeItem('username');
            console.log('password:'+localStorage.getItem('password'));
            console.log('username:'+localStorage.getItem('username'));
        }
    });