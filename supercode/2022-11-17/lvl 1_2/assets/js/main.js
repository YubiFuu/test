const button1 = document.querySelector("button");
const textOutput = document.querySelector(".zeit");

button1.addEventListener(`click`, () => {
    setInterval(numMinus, 100);
});
let num = 100;
function numMinus() {
    if (num > 0) {
        num--;
    } else {
        clearInterval(numMinus);
    }
    textOutput.innerHTML = `${num}%`;
}
