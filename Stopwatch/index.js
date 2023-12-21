const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const displaytime = document.getElementById('displaytime');
let [seconds, minutes, hours] = [0,0,0];
let timer = null;
function StopWatch() {
    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displaytime.innerHTML = h+":"+m+":"+s;
}
function WatchStart() {
    if(timer!== null) {
        clearInterval(timer);
        }
    timer = setInterval(StopWatch,1000);
}

function WatchStop() {
    clearInterval(timer);
}
function WatchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0]
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displaytime.innerHTML = h+":"+m+":"+s;
}
reset.addEventListener('click', WatchReset);

