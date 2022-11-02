const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const textInput = document.getElementById("text-input");
const textOutput = document.querySelector("h2");
const ul = document.querySelector("ul");

let arrayText = [];

btnAdd.addEventListener(`click`, (event) => {
    event.preventDefault();
    arrayText.push(`<li>&#129488;  ${textInput.value} </li>`);
    ul.innerHTML = arrayText.join("");
});
btnRemove.addEventListener(`click`, (event) => {
    event.preventDefault();
    arrayText.pop();
    ul.innerHTML = arrayText.join("");
});
