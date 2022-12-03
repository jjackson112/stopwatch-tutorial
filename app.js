const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const stopBtn = document.querySelector(".stop-btn");
const textArea = document.querySelector("h1");

let counter = 0;
let interval = null;

const stopwatch = () => {
counter ++;

let hours = Math.floor(counter/3600);
let minutes = Math.floor((counter - (hours * 3600)) / 60);
let seconds = counter % 60;

if (seconds < 10) {
    seconds = `0${seconds}`
}
if (minutes < 10) {
    minutes = `0${minutes}`
}
if (hours < 10) {
    hours = `0${hours}`
}

textArea.textContent = `${hours} : ${minutes} : ${seconds}`

};

const startStopwatch = () => {

    if (interval) {
    return;
}
    interval = setInterval(stopwatch, 1000);
};

const stopStopwatch = () => {
    clearInterval(interval);
    interval = null;
};

const resetStopwatch = () => {
    stopStopwatch();
    counter = 0;
    textArea.textContent = `00 : 00 : 00`;
};

startBtn.addEventListener("click", startStopwatch)

resetBtn.addEventListener("click", resetStopwatch)

topBtn.addEventListener("click", stopStopwatch)