/**
 * Created by zhouruiying
 * on 16-12-20.
 */

for(var i=localStorage.length-1;i>=0;i--){
    if(localStorage.key(i)=='username'){
        $scope.username = localStorage.getItem(localStorage.key(i));
    }
    if(localStorage.key(i)=='password'){
        $scope.password = localStorage.getItem(localStorage.key(i));
    }
}