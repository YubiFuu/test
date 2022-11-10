const select = document.getElementById("land");
const vorname = document.getElementById("vorname");
const nachname = document.getElementById("nachname");
const submit = document.querySelector("input[type=submit]");

submit.addEventListener(`click`, (event) => {
    event.preventDefault();
    console.log(vorname.value);
    console.log(nachname.value);
    console.log(select.value);
});
