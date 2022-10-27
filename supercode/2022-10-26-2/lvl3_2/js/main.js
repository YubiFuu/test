const p = document.querySelector("p");

function changeFontsSize() {
    const changeFS = document.getElementById("input-font-size").value;
    // if (changeFS == 1) {
    //     p.style.fontSize = "1rem";
    // } else if (changeFS == 2) {
    //     p.style.fontSize = "2rem";
    // } else if (changeFS == 3) {
    //     p.style.fontSize = "3rem";
    // } else if (changeFS == 4) {
    //     p.style.fontSize = "4rem";
    // } else {
    //     p.style.fontSize = "5rem";
    // }
    p.style.fontSize = changeFS + "rem";
}
function changeFontFamily() {
    const changeFF = document.getElementById("select-font-family").value;
    // if (changeFF == "bomo") {
    //     p.style.fontFamily = "'Bodoni Moda', serif";
    // } else if (changeFF == "opsa") {
    //     p.style.fontFamily = "'Open Sans', sans-serif";
    // } else if (changeFF == "ro") {
    //     p.style.fontFamily = "'Roboto'";
    // } else {
    //     p.style.fontFamily = "'Yusei Magic'";
    // }
    p.style.fontFamily = changeFF;
}

function changeInput() {
    p.innerHTML = document.getElementById("input-text").value;
}
