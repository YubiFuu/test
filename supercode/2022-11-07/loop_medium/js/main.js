function imageArray() {
    let returnArray = [];
    for (i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push(`image_00${i}`);
        } else if (i < 100) {
            returnArray.push(`image_0${i}`);
        } else {
            returnArray.push(`image_${i}`);
        }
    }
    console.log(returnArray);
}
imageArray();

let numInput = document.getElementById("num-input");
let textOutput = document.querySelector("h2");
let submit = document.querySelector("button[type=submit]");

submit.addEventListener(`click`, (event) => {
    event.preventDefault();
    let text = "Lap";
    let loop = "";
    let loop1 = "";
    // for (let i = 1; i <= 1; i++) {
    for (j = 1; j <= Number(numInput.value); j++) {
        loop += "o";
        if (j % 2 == 0) {
            loop1 += "0";
        } else {
            loop1 += "o";
        }
    }
    // }

    if (Number(numInput.value) <= 0) {
        textOutput.innerHTML = "ERROR";
    } else if (Number(numInput.value) % 2 == 0) {
        textOutput.innerHTML = text.replaceAll("a", loop);
    } else {
        textOutput.innerHTML = text.replaceAll("a", loop1);
    }
});
