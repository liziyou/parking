/**
 * Created by zhouruiying
 * on 16-12-20.
 */
angular.module('App')
    .controller('confirmCountController',function ($http,$state,ls) {
        var rootView = ls.getObject('info');
        console.log('从总的拿过来的值：'+rootView.name);
        console.log('从总的拿过来的值：'+rootView.text);

    });