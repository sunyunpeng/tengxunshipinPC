/**
 * Created by Administrator on 2016/5/31.
 */
var oLis=document.getElementById('tip').getElementsByTagName('li')

var oinner=document.getElementById('inner')
var bannerLeft = document.getElementById('bannerLeft');
var bannerRight = document.getElementById('bannerRight');
for(var i=0;i<oLis.length;i++){
    var oLi=oLis.item(i)
    oLi.i=i
    var cur=oLis[i]
    var tempStep = step > 4 ? 0 : step;
    oLi.onclick=function(){
        animate(oinner,{left:this.i*-265},700)
        step=this.i;
        console.log(step)
        change()



    }
}
var step=0;

function autoMove(){
    step++

    if(step==6){
        step=0
        animate.setCss(oinner,"left",0)
        autoMove()
        change()

        return


    }
    animate(oinner,{left:step*-265},700)
    change()


}

function autoMove2(){
    step--;
    console.log(step)
    if(step==0){
        step=6;
        animate.setCss(oinner,"left",-1325)
        autoMove()
        return


    }
    animate(oinner,{left:step*-265},700)
    change()

}


var autoTimer=window.setInterval(autoMove,2000)
outer.onmouseover = function (){
    window.clearInterval(autoTimer);

}
outer.onmouseout = function (){
    autoTimer = window.setInterval(autoMove,2000);

}
bannerRight.onclick = autoMove;
bannerLeft.onclick = function (){
    if(step <= 0){
        step = 5;
        animate.setCss(oinner,"left",-1325 )
        autoMove2()
        return
    }
    step--;
    animate(oinner,{left:step*-265},700);
    change()

}
function change(){
    var tempStep = step > 4 ? 0 : step;

    for (var i = 0; i < 6; i++) {
        var cur = oLis[i];



    }
}