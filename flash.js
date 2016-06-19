/**
 * Created by Administrator on 2016/6/6.
 */
var gg=document.getElementsByClassName('guanggao')[0]
var gg2=document.getElementById('box22')
 gg.onmouseover=function(){
     animate(gg,{top:270},700)
     gg.onmouseover=null;
   var time=  window.setTimeout(function(){
         animate(gg,{top:420},700)

         gg.style.zIndex=3;
     },5000);


 }
gg2.onmouseout=function(){

 time=null
}




