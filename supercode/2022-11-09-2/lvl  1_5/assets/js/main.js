const clickButton = document.getElementById("clickMe");

let anzahl = 0;
clickButton.addEventListener(`click`, () => {
    anzahl += 1;
    clickButton.innerHTML = `Click me: ${anzahl}`;
});
