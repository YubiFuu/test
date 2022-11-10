const changeMe = document.getElementById("navChange");
const home = document.getElementById("navHome");
const colorChange = document.getElementsByClassName("nav");

changeMe.addEventListener(`click`, () => {
    console.log(colorChange);
    colorChange[0].style.backgroundColor = "#f6c89f";
    colorChange[1].style.backgroundColor = "#ffe7d1";
    colorChange[2].style.backgroundColor = "#4b8e8d";
    colorChange[3].style.backgroundColor = "#396362";
});
