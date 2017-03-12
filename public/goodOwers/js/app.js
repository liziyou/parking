/**
 * Created by zhouruiying
 * on 2016/11/19.
 */
angular.module('App',['ionic','highcharts-ng','locals'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('tabs',{
                url:'/tabs',
                abstract:true,
                templateUrl:"views/tabs/tabs.html"
            })
            .state('login',{
                url:'/login',
                templateUrl:'views/login/login.html',
                controller:'LoginController'
            })
            .state('parkInfo',{
                url:'/parkInfo',
                templateUrl:'views/parkInfo/parkInfo.html',
                controller:'ParkInfoController'
            })
            .state('bindCar',{
                url:'/bindCar',
                templateUrl:'views/bindCar/bindCar.html',
                controller:'BindCarController'
            })
            .state('register',{
                url:'/register',
                templateUrl:'views/register/register.html',
                controller:'RegisterController'
            })
            .state('forgetPwd',{
              url:'/forgetPwd',
                templateUrl:'views/forgetPwd/forgetPwd.html',
                controller:'ForgetPwdController'
            })
            .state('payType',{
                url:'/setting/payType?settingType',
                templateUrl:'views/recharge/payType.html',
                controller:'payTypeController'
            })
            .state('confirmCount',{
                url:'/confirmCount',
                templateUrl:'views/recharge/confirmCount.html',
                controller:'confirmCountController'

            })
            .state('tabs.homes',{
                url:'/homes',
                views:{
                    'homes-tab':{
                        templateUrl:'views/homes/homes.html',
                        controller:'HomesController'
                    }
                }
            })
            .state('tabs.recharge',{
                url:'/recharge',
                views:{
                    'recharge-tab':{
                        templateUrl:'views/recharge/recharge.html',
                        controller:'RechargeController'
                    }
                }
            })
            .state('tabs.search', {
                url: '/search',
                views: {
                    'search-tab': {
                        templateUrl: 'views/search/search.html',
                        controller:'SearchController'
                    }
                }
            })
            .state('tabs.more',{
                url:'/more',
                views:{
                    'more-tab':{
                        templateUrl:'views/more/more.html',
                        controller:'MoreController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tabs/homes');
    })
    // .run(function ($ionicPlatform,$rootScope,$ionicHistory,$state) {
    //     var needLoginView =  ['tabs.recharge','tabs.search','bindCar','parkInfo'];
    //     $rootScope.$on('$stateChangeStart',function (event,toState,toParams,fromState,fromParams,options) {
    //         if(needLoginView.indexOf(toState.username)>=0&&$rootScope.isLogin){
    //             $state.go('login');
    //             event.preventDefault();
    //         }
    //     })
    // });

    .run(function($ionicPlatform,ls,$rootScope,$location,$state,$http,$ionicPopup,$ionicHistory){
        var needLoginView = ['tabs.recharge','tabs.search','bindCar','parkInfo'];
        var name = localStorage.getItem('username');
        var Pwd = localStorage.getItem('password');
        console.log('存储的password：'+name);
        console.log('存储的username：'+Pwd);
        if(!name||!Pwd){
            $rootScope.islogin = false;
        }else{
            $rootScope.islogin = true;
        }
        // $rootScope.islogin = false;
        console.log('得到的值 $rootScope.islogin：'+ $rootScope.islogin);
        // $http.jsonp(apiurl+"home/appapi/isLogin?callback=JSON_CALLBACK")
        //     .success(function (data) {
        //         if(data['status']==1){
        //             $rootScope.islogin = true;
        //         }else{
        //             $rootScope.islogin=false;
        //         }
        //     }).error(function () {
        //         $rootScope.islogin=false;
        //     });
        $rootScope.$on('$stateChangeStart',function (event,toState,toParams,fromState,fromParams,options) {
            if(needLoginView.indexOf(toState.name)>=0&&!$rootScope.islogin){
                event.preventDefault();
                $ionicPopup.alert({
                    title:'提示',
                    template:'请先登录！',
                    okText:'知道了'
                }).then(function () {
                    $state.go('login');
                })
            }
        });


        $ionicPlatform.ready(function(){
            ls.set('name','test');
            console.log(ls.get('name'));
            ls.setObject('info',{
                name:'Thoughts',
                text:'Today was a good day'
            });
            var infos = ls.getObject('info');
            // console.log(ls);
            console.log(infos);
            console.log(infos.name);
            console.log(infos.text);

            if(window.cordova&&window.cordova.plugins.Keyboard){
                cordova.plugins.Keyboard.hidekeyboardAccessoryBar(true);
            }
            if(window.statusBar){
                statusBar.styleDefault();
            }
        });
    })

    // .run(function($ionicPlatform,ls){
    //     $ionicPlatform.ready(function(){
    //         ls.set('name','test');
    //         console.log(ls.get('name'));
    //         ls.setObject('info',{
    //             name:'Thoughts',
    //             text:'Today was a good day'
    //         });
    //         var infos = ls.getObject('info');
    //         // console.log(ls);
    //         console.log(infos);
    //         console.log(infos.name);
    //         console.log(infos.text);
    //         if(window.cordova&&window.cordova.plugins.Keyboard){
    //             cordova.plugins.Keyboard.hidekeyboardAccessoryBar(true);
    //         }
    //         if(window.statusBar){
    //             statusBar.styleDefault();
    //         }
    //     });
    // })

    // .controller('LoginController',function ($scope,$state) {
    //     $scope.signIn = function (user) {
    //         console.log('login',user);
    //         $state.go('tabs.homes');
    //     };
    //
    // })
    // .controller('HomesController',function ($scope) {
    //     console.log('HomesController');
    //
    // })
    .factory('Currencies',function(){
        return[
            {code:'AUD',text:'Australian Dollar',selected:true},
            {code:'BRL',text:'Brazilian Real',selected:false},
            {code:'CAD',text:'Canadian Dollar',selected:true},
            {code:'CNY',text:'Chinese Yuan',selected:true},
            {code:'EUR',text:'Euro',selected:true},
            {code:'GBP',text:'British Pound Sterling',selected:true},
            {code:'IDR',text:'Indonesian Rupiah',selected:true},
            {code:'ILS',text:'Israeli New Sheqel',select:true},
            {code:'MXN',text:'Mexican Peso',selected:true},
            {code:'NOK',text:'Norwegian Krone',selected:false},
            {code:'NZD',text:'New Zealand Dollar',selected:false},
            {code:'PLN',text:'Polish Zloty',selected:true},
            {code:'RON',text:'Romanian Leu',selected:false},
            {code:'RUB',text:'Russian Ruble',selected:false},
            {code:'SEK',text:'Swedish Krona',selected:false},
            {code:'SGD',text:'Singapore Krona',selected:false},
            {code:'USD',text:'United States Dollar',selected:true},
            {code:'ZAR',text:'South African Rand',selected:false}
        ];
    });
