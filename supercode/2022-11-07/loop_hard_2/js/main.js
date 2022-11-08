const textInput = document.getElementById("num-input");
const number1 = document.getElementById("erste-zahl");
const number2 = document.getElementById("zweite-zahl");
const textOutput = document.querySelector("h3");
const btnCount = document.getElementById("enter");

btnCount.addEventListener(`click`, () => {
    let numInput = Number(textInput.value);
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let sum = 0;
    for (i = 0; i <= numInput; i++) {
        if (i % num1 == 0 || i % num2 == 0) {
            sum += i;
        } else {
        }
    }
    textOutput.innerHTML = sum;
});
