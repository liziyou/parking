/**
 * Created by zhouruiying
 * on 2016/12/12.
 * username:18164037099
 * password:144149
 */
angular.module('App')
    .controller('LoginController',function($scope,$rootScope,$http,$ionicPopup,$state,ls){
        $scope.goForgetPwd = function () {
            $state.go('forgetPwd',{},{reload:true});
        };
        // $scope.currencies = Currencies;
        $scope.ionLogin = function () {
            console.log("userName:"+$scope.userName);
            console.log("passPwd:"+$scope.passPwd);
            var pwdLock = CryptoJS.AES.encrypt($scope.passPwd,CryptoJS.enc.Utf8.parse('smallpos12345678'),{
                mode:CryptoJS.mode.ECB,
                padding:CryptoJS.pad.Pkcs7
            }).toString();
            console.log("passPwd:"+pwdLock);
            var opts = {
                userId:$scope.userName,
                password : pwdLock
            };
            $http.post('/parkUser/login',getSignParams(opts)).success(function(data) {
                if(data.flag == 1){
                    console.log('登录成功获得信息data：');
                    console.log(data.data);
                    console.log('登录成功获得信息email：'+data.data.email);
                    console.log('登录成功获得信息tel：'+data.data.tel);
                    console.log('登录成功获得信息type：'+data.data.type);
                    console.log('登录成功获得信息userId：'+data.data.userId);
                    $scope.name = data.data.userId;
                    //存储localStorage，key值：username，value：用户名
                    localStorage.setItem('username',$scope.name);

                    //存储localStorage，key值：password，value：密码
                    localStorage.setItem('password',$scope.passPwd);

                    alert(data.msg);
                    // ls.set("username",$scope.userName);
                    // ls.set("password",$scope.passPwd);
                    // console.log("用户名："+ls.get("username",""));
                    // console.log("密码："+ls.get("password",""));
                    $state.go('tabs.homes',{},{reload:true});
                }else{
                    alert(data.msg);
                    // ls.set("username",$scope.userName);
                    // ls.set("password",$scope.passPwd);
                    // console.log(ls.get("username",""));
                }
            });
        }
    });
