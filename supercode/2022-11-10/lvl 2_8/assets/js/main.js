let textInput = document.getElementById("userinput");
let buttonSave = document.getElementById("enter");
let ul = document.querySelector("ul");

buttonSave.addEventListener(`click`, (event) => {
    event.preventDefault();
    let newLi = document.createElement("li");
    newLi.textContent = textInput.value;
    ul.appendChild(newLi);
});
