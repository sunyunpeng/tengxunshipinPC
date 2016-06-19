/**
 * Created by Administrator on 2016/6/1.
 */

var box=document.getElementById('box_lb');
var uls=document.getElementsByTagName('ul');
var lb=document.getElementById('lb-h2');
var imgs=uls[1].getElementsByTagName('li');
var btn=uls[2].getElementsByTagName('li');
var lh2=lb.getElementsByTagName('h2')
var i=index=0; //中间量，统一声明；
var play=null;
console.log(box,uls,imgs,btn);//获取正确

//图片切换, 淡入淡出效果我是用（transition: opacity 0.8s linear）做的,不纠结、简单 在css里面
function show(a){        //方法定义的是当传入一个下标时，按钮和图片做出对的反应
    for(i=0;i<btn.length;i++ ){
        btn[i].className='';    //很容易看懂吧？每个按钮都先设置成看不见，然后把当前按钮设置成可见。
        btn[a].className='current';
    }
    for(i=0;i<imgs.length;i++){ //把图片的效果设置和按钮相同
        imgs[i].style.opacity=0;

        imgs[a].style.opacity=1;

    }
    for(i=0;i<imgs.length;i++){ //文字的效果设置和按钮相同
        lh2[i].style.opacity=0;

        lh2[a].style.opacity=1;

    }
}
//切换按钮功能，响应对应图片
for(i=0;i<btn.length;i++){
    btn[i].index=i;  //不知道你有没有发现，循环里的方法去调用循环里的变量体i，会出现调到的不是i的变动值的问题。所以我先在循环外保存住
    btn[i].onmouseover=function(){
        show(this.index);
        clearInterval(play); //这就是最后那句话追加的功能
    }
}

//自动轮播方法
function autoPlay(){
    play=setInterval(function(){ //这个paly是为了保存定时器的，变量必须在全局声明 不然其他方法调不到 或者你可以调用auto.play 也许可以但是没时间试了
        index++;
        index>=imgs.length&&(index=0);//可能有优先级问题，所以用了括号，没时间测试了。
        show(index);
    },3000)

}
autoPlay();//马上调用，我试过用window.onload调用这个方法，但是调用之后影响到了其他方法，使用autoPlay所以只能这样调用了

//div的鼠标移入移出事件
box.onmouseover=function(){
    clearInterval(play);
};
box.onmouseout=function(){
    autoPlay();
};
//按钮下标也要加上相同的鼠标事件，不然图片停止了，定时器没停，会突然闪到很大的数字上。 貌似我可以直接追加到之前定义事件中。

