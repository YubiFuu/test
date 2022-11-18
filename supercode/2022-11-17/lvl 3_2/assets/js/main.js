const textInput = document.getElementById("minutes");
const timer = document.getElementById("time");

textInput.addEventListener(`input`, function () {
    this.value = this.value.replace(/[^0-9\.\,\:]/, "");
});
let minutes = "0";
let seconds = "0";
let interval1;
function startMinCountdown() {
    clearInterval(interval1);
    interval1 = setInterval(countDown, 1000);
    if (
        textInput.value.includes(".") ||
        textInput.value.includes(",") ||
        textInput.value.includes(":")
    ) {
        let array = [];
        if (textInput.value.includes(".")) {
            array = textInput.value.split(".");
        } else if (textInput.value.includes(",")) {
            array = textInput.value.split(",");
        } else if (textInput.value.includes(":")) {
            array = textInput.value.split(":");
        }
        minutes = Number(array[0]);
        seconds = Number(array[1]);
    } else {
        minutes = Number(textInput.value);
        seconds = Number("00");
    }
    textInput.value = "";
}
countDown = () => {
    let sec;
    let min;
    if (seconds > 0) {
        seconds--;
        sec = seconds;
        min = minutes;
    }
    if (seconds == 0 && minutes > 0) {
        seconds = 60;
        minutes--;
    } else {
        clearInterval(countDown);
    }
    timer.innerHTML = `${min}:${sec}`;
    if (sec < 10 && min >= 10) {
        timer.innerHTML = `${min}:0${sec}`;
    } else if (sec < 10 && min < 10) {
        timer.innerHTML = `0${min}:0${sec}`;
    } else if (sec >= 10 && min < 10) {
        timer.innerHTML = `0${min}:${sec}`;
    } else {
        timer.innerHTML = `${minutes}:${seconds - 1}`;
        if (seconds == 0 && minutes == 0) {
            timer.innerHTML = `00:00`;
        }
    }
};
let curTime;
let paused = false;
function pauseMinCountdown() {
    if (!paused) {
        paused = true;
        clearInterval(interval1);
        curTime = timer.textContent;
        console.log(curTime);
    }
}

function continueMinCountdown() {
    if (paused) {
        paused = false;
        textInput.value = curTime;
        startMinCountdown();
        textInput.value = "";
    }
}
