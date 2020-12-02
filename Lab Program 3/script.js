var size = 0;
var timeout_1,timeout_2;
var text;

function start(){
    text = document.getElementById("text");
    timeout_1 = window.setInterval("increase()",100);
}

function increase(){
    size +=1;
    text.innerHTML = "Text Growing......" + size + "pt";
    text.style.fontSize = size + "pt";
    text.style.color = "red";
    if(size>49){
        window.clearInterval(timeout_1);
        timeout_2 = window.setInterval("decrease()",100);
    }
}

function decrease(){
    size-=1;
    text.innerHTML = "Text Shrinking...." + size + "pt";
    text.style.fontSize = size + "pt";
    text.style.color = "blue";
    if(size<6){
        window.clearInterval(timeout_2);
        timeout1 = window.setInterval("increase()",100);
    }
}