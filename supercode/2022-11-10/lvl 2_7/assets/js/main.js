const btnClick = document.querySelector("button");
const div = document.querySelector("div");

let counter = 0;

let div2;

btnClick.addEventListener(`click`, () => {
    counter++;
    div2 = document.createElement("div");
    div2.classList.add("rechteck");

    lastNumber = String(counter).slice(-1);
    if (lastNumber == 1) {
        div2.classList.add("weiss");
    }
    // alternativ: if (counter % 10 == 1 || counter == 1)
    div2.textContent = `${counter}`;
    div.appendChild(div2);
});
