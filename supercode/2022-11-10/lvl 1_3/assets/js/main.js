let buttons = document.querySelectorAll("button");
let output = document.querySelector("output");

buttons[0].addEventListener(`click`, () => {
    output.innerHTML = document.body.children[0].firstElementChild.innerHTML;
});
buttons[1].addEventListener(`click`, () => {
    output.innerHTML = document.body.children[0].lastElementChild.innerHTML;
});
buttons[2].addEventListener(`click`, () => {
    output.innerHTML =
        document.body.children[0].firstElementChild.nextElementSibling.innerHTML;
});
buttons[3].addEventListener(`click`, () => {
    output.innerHTML =
        document.body.children[0].lastElementChild.previousElementSibling.innerHTML;
});
