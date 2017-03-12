//主页图片切换
function turnPic() {
    var index = 0;//当前播放图片索引
    var stop = false;//表示是否手动播放，默认false表自动播放
    var $pagesLis = $("#head").find("#imgarea li");//.find("#imgsID li");
    var mainDivh = $("div#head").width();//获取div宽度
    $("ul#imgarea").css({ "width": ($pagesLis.length) * mainDivh })//
    setInterval(function () {
        if (stop) return;
        index++;
        if (index == $pagesLis.length) {
            index = 0;
        }
        $("ul#imgarea")
            .stop(true, true)
                       .animate({ "marginLeft": -mainDivh * index }, 500);
    }, 3000);
}
$(function () {
    turnPic();
});