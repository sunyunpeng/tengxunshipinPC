/**
 * Created by Administrator on 2016/6/6.
 */
var move = document.getElementById('fixd');
move.scroll = utils.getWin('scrollTop');
function showBtn() { //浏览器会在单位时间内不断的捕捉 频率 frequency
    console.log('你已经触发了滚轮事件');
    //判断你滚轮滚出去了多少
    console.log(move.isShow);
    if (!move.isScrolling) {
        var winScrollTop = utils.getWin('scrollTop'); //获取了浏览器已经滚出去高度
        console.log(winScrollTop);
        var direction = winScrollTop - move.scroll;
        console.log(move.scroll);
        console.log(direction);
        move.isShow = move.isShow || true;
        if (direction > 0 && winScrollTop > 110 && move.isShow) {
            move.isScrolling = true;
            animate(move, {top: -126}, 300);
            setTimeout(function (){
                move.isShow = false;
                move.isScrolling= false;
                if (utils.getWin('scrollTop') <110){
                    animate(move, {top: 0}, 300);
                }
            },500)
        } else if (direction < 0 && move.isShow) {
            move.isScrolling = true;
            animate(move, {top: 0}, 300);
            setTimeout(function (){
                move.isShow = true;
                move.isScrolling= false;

            },300)
        }
        move.scroll = winScrollTop;
    }else{
        console.log("asfasfdas")
    }
    move.scroll = winScrollTop;

}
window.onscroll = showBtn;
//function handle(delta) {
//    var s = delta + ": ";
//    if (delta < 0) {
//        animate(move, {top: -126}, 500)
//    }
//    else {
//        animate(move, {top: 0}, 500)
//    }
//}//from www.fengfly.com
//function wheel(event) {
//    var delta = 0;
//    if (!event) event = window.event;
//    if (event.wheelDelta) {
//        delta = event.wheelDelta / 120;
//        if (window.opera) delta = -delta;
//    } else if (event.detail) {
//        delta = -event.detail / 3;
//    }
//    if (delta)
//        handle(delta);
//}
//if (window.addEventListener)
//    window.addEventListener('DOMMouseScroll', wheel, false);
//window.onmousewheel = document.onmousewheel = wheel;
//
//var mouseWheel = document.getElementById('mouseWheel');
//if (mouseWheel.addEventListener) {
//    mouseWheel.addEventListener('DOMMouseScroll', function (event) {
//        event.target.innerHTML = event.detail;
//        event.stopPropagation();
//        event.preventDefault();
//    }, false);
//}
////mouseWheel.onmousewheel = function(event) {
////    event = event || window.event;
////    mouseWheel.innerHTML = event.wheelDelta;
////    event.returnValue = false;
////}

