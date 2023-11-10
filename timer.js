const start=document.getElementById("start");
const stopE1=document.querySelector("#stop");
const rest=document.querySelector("#rest");
const timer=document.getElementById("timer");
let time=1500;
let intervals;
function timerStart(){
    let minutes=Math.floor(time/60);
    let second= time%60;
    var formattedTime=`${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`;
    timer.innerHTML=formattedTime;

}
function startTimer(){
  intervals= setInterval(()=> {
        time--;
        timerStart();
        if(time===0){
            clearInterval(intervals);
            alert("time out");
            time=1500;
            timerStart();
        }

    },1000);
}
function stopTimer(){
    clearInterval(intervals);
}
function restTimer(){
    clearInterval(intervals);
    time=1500;
    timerStart();
    console.log(setTimeout().toString());
}
start.addEventListener("click",startTimer);
stopE1.addEventListener("click",stopTimer);
rest.addEventListener("click",restTimer);
