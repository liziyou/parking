/**
 * Created by zhouruiying
 * on 2016/11/17.
 */

// 获得签名
var getSignParams = function(params){
    var params=params;
    var paramsList=[];
    var sigeStr='';
    delete params.sign;
    for(var i in params){
        //if(params[i]){
        paramsList.push(i);
        //}
    }
    paramsList.sort(function (l, r) {
        return l > r ? 1 : -1;
    });
    for(var j=0;j<paramsList.length;j++){
        sigeStr+=paramsList[j]+'='+params[paramsList[j]]+'&';
    }
    if(sigeStr==''){
        sigeStr+='&';
    }
    sigeStr=MD5(sigeStr+'secret=z3ydBD2-bC84b9@6$3f2C_d08o9-6969C7eB');
    params.sign=sigeStr;
    return params;
};