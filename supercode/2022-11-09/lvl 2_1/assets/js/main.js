const changeMe = document.getElementById("navChange");
const home = document.getElementById("navHome");
const colorChange = document.getElementsByClassName("nav");

changeMe.addEventListener(`click`, () => {
    home.classList.toggle("pink");
});
