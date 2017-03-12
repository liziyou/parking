/**
 * Created by zhouruiying
 * on 2016/12/12.
 */
angular.module('App')
    .controller('RegisterController',function($scope,$http,Currencies,$state,$ionicNavBarDelegate,$ionicHistory,$interval){
        $scope.Pwd = localStorage.getItem('password');
        $scope.userNa = localStorage.getItem('username');
        console.log('获得ｌｏｇｉｎ的值password：'+$scope.Pwd );
        console.log('获得ｌｏｇｉｎ的值username:'+$scope.userNa);
        $scope.currencies = Currencies;
        // $scope.emailNotification = true;
        $scope.pushNotificationChange = function() {
            if($scope.pushNotification.checked == true){
                console.log('选中了');
                $('#ionicRe').removeAttr('disabled');
            }else{
                $('#ionicRe').attr('disabled','false');
                console.log('未选中');
            }
        };

        $scope.pushNotification = { checked: true };
        $scope.paracount = '获取验证码';
        var returnTime = "";
        $scope.code = '';
        // console.log($scope.isChecked);
        $scope.getPhoneCode = function(){
            console.log("$scope.phone:"+$scope.phone);
            console.log("$scope.telCode:"+$scope.telCode);

            $http.post('/parkUser/phonecode',getSignParams({phone:$scope.phone})).success(function (data) {
                if(data.flag == 1){
                    $scope.paraclass = 'but_null';
                    $scope.paraevent = true;
                    var second = 60, timePromise = undefined;
                    timePromise = $interval(function(){
                        if(second<=0){
                            $('#phoneCode').removeAttr('disabled');
                            $interval.cancel(timePromise);
                            timePromise = undefined;

                            second = 60;
                            $scope.paracount = '重发验证码';
                            $scope.paraclass = "but_null";
                        }else{
                            $('#phoneCode').attr('disabled','true');
                            $scope.paracount = second + "秒后可重发";
                            $scope.paraclass = 'not but_null';
                            second--;
                        }
                    },1000,1000);
                    alert(data.msg);
                    console.log(data.time);
                    returnTime = String(data.time);
                    console.log("时间获得："+returnTime);
                    console.log('获得时间类型：'+ typeof returnTime);
                    console.log("第几次："+data.code);
                    // $scope.code = data.code;

                }else{
                    alert(data.msg);
                }
            });
        };
        $scope.changeRegi = function(){
            var checked = $('#dealChecked').is(':checked');
            if(checked == true){
                console.log("选中了");
            }else{
                console.log('未选中');
            }
        };

        $scope.ionRegister = function(){
            console.log($scope.phone);
            if(!$scope.phone){
                return alert('手机号不能为空！');
            }
            if(!$scope.telCode){
                return alert('请输入验证码！');
            }
            if(!$scope.pwd){
                return alert('请输入密码!');
            }
            console.log($scope.pwd);
            var pwdLock = CryptoJS.AES.encrypt($scope.pwd,CryptoJS.enc.Utf8.parse('smallpos12345678'),{
                mode:CryptoJS.mode.ECB,
                padding:CryptoJS.pad.Pkcs7
            }).toString();
            console.log("passPwd:"+pwdLock);
            console.log('注册');
            var opts = {
                tel:$scope.phone,
                password:pwdLock,
                time : returnTime,
                code :$scope.extend,
                captcha :$scope.telCode,
                type : 'carUser'
            };
            $http.post('/parkUser/register',getSignParams(opts)).success(function(data){
                if(data.flag == 1){
                    alert(data.msg);
                    $state.go('login',{},{reload:true});
                }else{
                    alert(data.msg);
                }
            });
        };

    });