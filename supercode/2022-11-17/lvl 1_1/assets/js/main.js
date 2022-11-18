// ----------------- PRT1 ----------------
// const consoleOutput = () => {
//     console.log("Start: Wait for 3 seconds...");
// };

// const consoleOutputEnd = () => {
//     console.log("yay o/ you waited 3 seconds!");
// };

// setTimeout(consoleOutput, 1000);
// setTimeout(consoleOutputEnd, 5000);

// ----------------- PRT2 ----------------

// const timeInterval = () => {
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     console.log(`${hour}:${min}:${sec}`);
// };

// setInterval(timeInterval, 1000);

// ----------------- PRT2 ----------------
let num = 11;
const countDown = () => {
    if (num > 1) {
        num--;
        console.log(num);
    } else {
        console.log("It's home time!");
        clearInterval(countDownInterval);
    }
};
const countDownInterval = setInterval(countDown, 1000);
