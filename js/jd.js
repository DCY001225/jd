//王俊凯全棉时代动态图
var wjk=document.querySelector("#qmsd>a>img");
var w1=document.querySelector("#qmsd>a .wjk");
wjk.onmouseenter=function(){
    w1.style="display:block";
}
var over=document.querySelector("#qmsd");
over.onmouseleave=function(){
    w1.style="display:none";
}