/**
 * Created by zhouruiying
 * on 16-12-20.
 */
angular.module('locals',[])
    .factory('ls',['$window',function ($window) {
        return{
            set:function(key,value){
                $window.localStorage[key] = value;
            },
            get:function (key,defaultValue) {
                return $window.localStorage[key]||defaultValue;
            },
            setObject:function(key,value){
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject:function (key) {
                return JSON.parse($window.localStorage[key]||'{}');
            },
            remove:function(key){
                $window.localStoge.removeItem(key);
            }
        }
    }]);
