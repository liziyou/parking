/**
 * Created by zhouruiying
 * on 2016/12/7.
 */
angular.module('App')
.controller('SearchController',function($scope,$http,$state,$stateParams,Currencies){
        $scope.history = {
            currency:$stateParams.currency || 'USD'
        };
        $scope.currencies = Currencies;
        $scope.changeCurrency = function(){
          $state.go('tabs.search',{currency:$scope.history.currency});
        };
        $scope.chart = {
            options: {
                chart: {
                    type: 'line'
                },
                legend: {
                    enabled: false
                }
            },
            title:{
                text:null
            },
            yAxis:{
                title:null
            },
            xAxis:{
                title:null
            },
            series:[]
        };
        $http.get('https://api.bitcoinaverage.com/history/' + $scope.history.currency + '/per_hour_monthly_sliding_window.csv').success(function (prices) {
           prices = prices.split(/\n/);
            var series = {
                data :[]
            } ;
            angular.forEach(prices,function(price,index){
                prices = price.split(',');
                var date = new Date(price[0].replace(' ','T')).getTime();
                var value = parseFloat(price[3]);
                if(date&&value>0){
                    series.data.push([date,value]);
                }
            });
            $scope.chart.series.push(series);
        });
        $scope.$on('$ionicView.beforeEnter', function () {
            $scope.history = {
                currency:$stateParams.currency || 'USD'
            };
        });
    });