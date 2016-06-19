
/**
 * Created by Administrator on 2016/6/3.
 */
window.onload = function()
{
    var box = document.getElementById("container1");  //获得容器对象
    var imgs = box.getElementsByTagName("img");  //获得图片对象数组
    imgWidth = imgs[0].offsetWidth;  //图片宽度
    var exposeWidth = 250;  //每张图片露出的宽度
    var boxWidth = imgWidth + exposeWidth * (imgs.length - 1);
    console.log(boxWidth)
    box.style.width = boxWidth + "px";
  var bg=document.getElementById('bg1')
    //初始化图片位置
    var flag=0;
    var j=0;
    var ceshi=0;
    console.log(ceshi)
    function reset()
    {
        flag++;

        for(var i = 1; i < imgs.length; i ++)
        {

            if (flag==1){
                imgs[0].style.left = 0+ "px";
                imgs[i].style.left = imgWidth + (i - 1) * exposeWidth + "px";
            }else{
                animate(imgs[0],{left:0},700)
                animate(imgs[i],{left:250*(i)},700)
                animate(bg,{left:250*(j+1)},700)

            }


        }
    }
    reset();

    //开门时候每个图片应该左移的距离
    var translate = 250;
    //为每个图片添加事件
    for(var i = 0; i < imgs.length; i ++)
    {

        //自动执行函数
    (function(i){
            if(ceshi==0) {

                imgs[i].onmouseenter = function () {
                    ceshi++;
                    console.log(ceshi)
                    bg.style.display = "block";
                    bg.style.left = 250 * (i + 1) + "px";


                    switch (i) {
                        case 1:
                            j = i
                            bg.className = "bg" + i
                            break
                        case 2:
                            j = i
                            bg.className = "bg" + i
                            break
                        case 3:
                            j = i
                            bg.className = "bg" + i
                            break
                        case 4:
                            j = i
                            bg.className = "bg" + i
                            break
                        case 0:
                            j = i
                            bg.className = "bg" + i
                            break
                    }


                    //重置图片位置

                    var interval = 200;
                    var times = 0;
                    var duration = 1000;

                    imgs[0].onmouseenter =null;
                    imgs[1].onmouseenter =null;
                    imgs[2].onmouseenter =null;
                    imgs[3].onmouseenter =null;
                    imgs[4].onmouseenter =null;
                    switch (i) {
                        case 0:
                            /* function step(){
                             times+=interval;

                             var begin=parseInt(imgs[i + 1].style.left, 10);
                             var change= 3* translate;
                             if(times<duration){
                             var val1 = times/duration * change + begin
                             animate.setCss(imgs[i+1],"left",val1)
                             }else if (times>=duration){
                             clearInterval(imgs[i].timer)
                             var valA= 750+"px"
                             console.log(valA)
                             animate.setCss(imgs[i+1],"left",valA)
                             }
                             }
                             imgs[i].timer = setInterval(step, interval)*/
                            /* var val1= parseInt(imgs[i + 1].style.left, 10) + 3* translate;
                             animate.setCss(imgs[i+1],"left",val1)*/
                            bg.style.left = parseInt(imgs[i].style.left, 10) + 250;
                            animate(bg, {left: 250}, 700)
                            animate(imgs[i + 1], {left: parseInt(imgs[i + 1].style.left, 10) + 3 * translate}, 700)
                            animate(imgs[i + 2], {left: parseInt(imgs[i + 2].style.left, 10) + 3 * translate}, 700)
                            animate(imgs[i + 3], {left: parseInt(imgs[i + 3].style.left, 10) + 3 * translate}, 700)
                            animate(imgs[i + 4], {left: parseInt(imgs[i + 4].style.left, 10) + 3 * translate}, 700)

                            /* var val2= parseInt(imgs[i + 2].style.left, 10) + 3* translate;
                             animate.setCss(imgs[i+2],"left",val2)
                             var val3= parseInt(imgs[i + 3].style.left, 10) + 3* translate;
                             animate.setCss(imgs[i+3],"left",val3)
                             var val4= parseInt(imgs[i + 4].style.left, 10) + 3* translate;
                             animate.setCss(imgs[i+4],"left",val4)*/
                            /* imgs[i + 1].style.left = parseInt(imgs[i + 1].style.left, 10) + 3* translate + "px";*/
                            /* imgs[i + 2].style.left = parseInt(imgs[i + 2].style.left, 10) + 3 * translate + "px";*/
                            /* imgs[i + 3].style.left = parseInt(imgs[i + 3].style.left, 10) + 3 * translate + "px";
                             imgs[i + 4].style.left = parseInt(imgs[i + 4].style.left, 10) + 3 * translate + "px";*/
                            break
                        case 1:
                            bg.style.left = parseInt(imgs[i].style.left, 10) + 250;
                            animate(bg, {left: 250}, 700)
                            animate(imgs[i - 1], {left: parseInt(imgs[i - 1].style.left, 10) - translate}, 700)
                            animate(imgs[i], {left: parseInt(imgs[i].style.left, 10) - translate}, 700)
                            animate(imgs[i + 1], {left: parseInt(imgs[i + 1].style.left, 10) + 2 * translate}, 700)
                            animate(imgs[i + 2], {left: parseInt(imgs[i + 2].style.left, 10) + 2 * translate}, 700)
                            animate(imgs[i + 3], {left: parseInt(imgs[i + 3].style.left, 10) + 2 * translate}, 700)
                            /* imgs[i-1].style.left = parseInt(imgs[i].style.left, 10) - translate + "px";
                             imgs[i].style.left = parseInt(imgs[i].style.left, 10) - translate + "px";
                             imgs[i + 1].style.left = parseInt(imgs[i + 1].style.left, 10) + 2*translate + "px";
                             imgs[i + 2].style.left = parseInt(imgs[i + 2].style.left, 10) + 2 * translate + "px";
                             imgs[i + 3].style.left = parseInt(imgs[i + 2].style.left, 10) + 2 * translate + "px";*/

                            break
                        case 2:
                            bg.style.left = parseInt(imgs[i].style.left, 10) + 250;
                            animate(bg, {left: 250}, 700)
                            animate(imgs[i - 2], {left: parseInt(imgs[i - 2].style.left, 10) - i * translate}, 700)
                            animate(imgs[i - 1], {left: parseInt(imgs[i - 1].style.left, 10) - i * translate}, 700)
                            animate(imgs[i], {left: parseInt(imgs[i].style.left, 10) - i * translate}, 700)
                            animate(imgs[i + 1], {left: parseInt(imgs[i + 1].style.left, 10) + translate}, 700)
                            animate(imgs[i + 2], {left: parseInt(imgs[i + 2].style.left, 10) + translate}, 700)
                            /* imgs[i-1 ].style.left = parseInt(imgs[i ].style.left, 10) - 2*translate + "px";
                             imgs[i ].style.left = parseInt(imgs[i ].style.left, 10) - 2*translate + "px";

                             imgs[i+ 1].style.left = parseInt(imgs[i  + 1].style.left, 10) + translate + "px";
                             imgs[i+ 2].style.left = parseInt(imgs[i  + 2].style.left, 10) + translate + "px";*/
                            break
                        case 3:
                            bg.style.left = parseInt(imgs[i].style.left, 10) + 250;
                            animate(bg, {left: 250}, 700)
                            animate(imgs[i + 1], {left: parseInt(imgs[i + 1].style.left, 10)}, 700)
                            animate(imgs[i], {left: parseInt(imgs[i].style.left, 10) - i * translate}, 700)
                            animate(imgs[i - 1], {left: parseInt(imgs[i - 1].style.left, 10) - i * translate}, 700)
                            animate(imgs[i - 2], {left: parseInt(imgs[i - 2].style.left, 10) - i * translate}, 700)
                            animate(imgs[i - 3], {left: parseInt(imgs[i - 3].style.left, 10) - i * translate}, 700)
                            /*imgs[i - 3].style.left = parseInt(imgs[i - 3].style.left, 10) - 3 * translate + "px";
                             imgs[i - 2].style.left = parseInt(imgs[i  - 2].style.left, 10) - 3 * translate + "px";
                             imgs[i - 1].style.left = parseInt(imgs[i  - 1].style.left, 10) - 3 * translate + "px";
                             imgs[i ].style.left = parseInt(imgs[i].style.left, 10) - 3 * translate + "px";*/

                            break
                        case 4:
                            bg.style.left = parseInt(imgs[i].style.left, 10) + 250;
                            animate(bg, {left: 250 * 2}, 700)
                            animate(imgs[i], {left: parseInt(imgs[i].style.left, 10) - 3 * translate}, 700)
                            animate(imgs[i - 1], {left: parseInt(imgs[i - 1].style.left, 10) - 3 * translate}, 700)
                            animate(imgs[i - 2], {left: parseInt(imgs[i - 2].style.left, 10) - 3 * translate}, 700)
                            animate(imgs[i - 3], {left: parseInt(imgs[i - 3].style.left, 10) - 3 * translate}, 700)
                            animate(imgs[i - 4], {left: parseInt(imgs[i - 4].style.left, 10) - 3 * translate}, 700)
                            /* imgs[i - 3].style.left = parseInt(imgs[i - 3].style.left, 10) - 3 * translate + "px";
                             imgs[i - 2].style.left = parseInt(imgs[i  - 2].style.left, 10) - 3 * translate + "px";
                             imgs[i - 1].style.left = parseInt(imgs[i  - 1].style.left, 10) - 3 * translate + "px";
                             imgs[i ].style.left = parseInt(imgs[i].style.left, 10) - 3 * translate + "px";*/
                            break

                    }

                };
            }



            box.onmouseleave= function(){
                reset();
                window.onload()
            }


        })(i);
    }

};
