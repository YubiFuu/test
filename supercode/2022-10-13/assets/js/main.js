function multiple() {
    event.preventDefault();
    const outputData = document.querySelector(".double");
    const number = document.querySelector(".num").value;
    outputData.innerHTML = number * 2;
}

function calcAge() {
    event.preventDefault();
    const outputData = document.querySelector("h3");
    const age = document.querySelector(".age").value;
    outputData.innerHTML = new Date().getFullYear() - age;
}

function calcAgeDif() {
    event.preventDefault();
    const outputData = document.querySelector("h4");
    const age1 = document.querySelector(".age1").value;
    const age2 = document.querySelector(".age2").value;

    outputData.innerHTML = Math.abs(age1 - age2);
}

function changeHeadline() {
    const wrapper = document.querySelector("h1");
    wrapper.classList.add("big");
}
function resetHeadline() {
    const wrapper = document.querySelector("h1");
    wrapper.classList.remove("big");
}

const result = document.querySelector(".result");
const text = document.write;

function plusOne() {
    result.innerHTML++;
}

function plusTen() {
    result.innerHTML = parseInt(result.innerHTML, 10) + 10;
}
function plusOneHun() {
    result.innerHTML = parseInt(result.innerHTML, 10) + 100;
}
function minusOne() {
    result.innerHTML--;
}
function minusTen() {
    result.innerHTML = parseInt(result.innerHTML, 10) - 10;
}
function minusOneHun() {
    result.innerHTML = parseInt(result.innerHTML, 10) - 100;
}
function multipleTwo() {
    result.innerHTML = parseInt(result.innerHTML, 10) * 2;
}
function resetResult() {
    result.innerHTML = 0;
}

let heightPerson2 = Number(document.getElementById("height2-input").value);

console.log(document.querySelector("label"));
