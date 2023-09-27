const display= document.querySelector("#display");
const small_display=document.querySelector("#small-display");
function clr(){
    small_display.innerHTML="";
    display.innerHTML="";
}
function num(n){
    display.innerHTML= display.innerHTML+ n;
}
function plus(){
    display.innerHTML =display.innerHTML+"+";
}
function minus(){
    display.innerHTML =display.innerHTML+"-";
}
function multiply(){
    display.innerHTML =display.innerHTML+"*";
}
function divide(){
    display.innerHTML =display.innerHTML+"/";
}
function oBrace(){
    display.innerHTML =display.innerHTML+"(";
}
function cBrace(){
    display.innerHTML =display.innerHTML+")";
}
function back(){    
    let string = display.innerHTML;
    display.innerHTML= string.substr(0, string.length - 1);
}
function point(){
    display.innerHTML=display.innerHTML+".";
}
function equal(){
    small_display.innerHTML = display.innerHTML;
    display.innerHTML= eval(display.innerHTML);
}