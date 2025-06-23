
let time=1;
let result=document.getElementById("timer");
function timer(){
    result.textContent=time;
    time=time+1;
}
let timerid=setInterval(timer,1000);
function stop(){
    clearInterval(timerid);
}
