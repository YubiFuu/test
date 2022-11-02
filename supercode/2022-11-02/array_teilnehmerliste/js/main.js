const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const textInput = document.getElementById("text-input");
const textOutput = document.querySelector("h2");

let arrayText = [];

btnAdd.addEventListener(`click`, (event) => {
    event.preventDefault();
    arrayText.push("&#129488; " + textInput.value + "</br>");
    textOutput.innerHTML = arrayText.join("");
});
btnRemove.addEventListener(`click`, (event) => {
    event.preventDefault();
    arrayText.pop();
    textOutput.innerHTML = arrayText.join("");
});
