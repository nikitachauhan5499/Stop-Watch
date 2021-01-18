const HOUR = document.querySelector("#hours");
const MINUTE = document.querySelector("#minutes");
const SECONDS = document.querySelector("#seconds");

const START = document.querySelector("#start");
const STOP = document.querySelector("#stop");
const RESET = document.querySelector("#reset");

var timer = [0, 0, 0];
var interval;
var timerRunning = false;

function leadingZero(time) {
    if(time<=9)
        return '0'+time;
    return time;
}

function runTimer() {
    timer[2]++;
    if(timer[2]==60)
        timer[1]++;
    if(timer[1]==60)
        timer[0]++;
    HOUR.innerHTML = leadingZero(timer[0]%24);
    MINUTE.innerHTML = leadingZero(timer[1]%60);
    SECONDS.innerHTML = leadingZero(timer[2]%60);
}

function startfunc() {
    clearInterval(interval);
    interval = setInterval(runTimer, 1000);
    console.log(interval);
}

function stopfunc() {
    clearInterval(interval);
    console.log(interval);
}

function resetfunc() {
    clearInterval(interval);
    timer[0]=0;
    timer[1]=0;
    timer[2]=0;
    HOUR.innerHTML = leadingZero(timer[0]%24);
    MINUTE.innerHTML = leadingZero(timer[1]%60);
    SECONDS.innerHTML = leadingZero(timer[2]%60);
}

START.addEventListener("click", startfunc, false);
STOP.addEventListener("click", stopfunc, false);
RESET.addEventListener("click", resetfunc, false);