
/**
 * 分页
 * @param $scope        域对象
 * @param items         数据
 * @param pageCount     每页多少行
 * @param amount        总数
 * @param currentPage   总共多少页
 * @param url           请求地址
 */
function small_page($scope, items, pageCount, amount, currentPage, url){
    $scope.pageData = {
        amount : amount
        ,currentPage : currentPage
        ,recordCount : items.length
        ,items : items
    };

    $scope.range = function(){
        var maxCount = 3;   //左右最多显示页数
        var countArray = [];
        for(var i = 0; i < pageCount; i++){
            var index = i + 1;
            if(index >= (parseInt(currentPage) - parseInt(maxCount)) && index <= (parseInt(currentPage) + parseInt(maxCount))){
                countArray.push(index);
            }
        }
        return countArray;
    };

    $scope.setPage = function(n){
        if ( $scope.pageData.currentPage != n) {
            $scope.pageData.currentPage = n;
        }
        $scope.query.page = n;
        $scope.queryByPage(url, $scope.query);
    };

    $scope.prevPage = function(){
        if ( $scope.pageData.currentPage > 1) {
            $scope.pageData.currentPage--;
            $scope.setPage($scope.pageData.currentPage);
        }
    };
    $scope.prevPageDisabled = function(){
        return $scope.pageData.currentPage === 1 ? "disabled" : "";
    };

    $scope.nextPage = function() {
        if ( $scope.pageData.currentPage < pageCount) {
            $scope.pageData.currentPage++;
            $scope.setPage($scope.pageData.currentPage);
        }
    };

    $scope.nextPageDisabled = function() {
        return $scope.pageData.currentPage === pageCount ? "disabled" : "";
    };
}