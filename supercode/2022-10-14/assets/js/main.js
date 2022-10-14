function getDark() {
    const backColor = document.body.style.backgroundColor;
    if (backColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    const wrapper = document.querySelector("main div.flat-rate div p.price"); //Greifen uns das HTML Element
    wrapper.classList.toggle("dark"); //Toggeln mit einer Class
    const wrapperTwo = document.querySelector("span");
    wrapperTwo.classList.toggle("dark");
    const wrapperThree = document.querySelector("main div.how-it-works");
    wrapperThree.classList.toggle("dark");
    const wrapperFour = document.querySelector("nav p");
    wrapperFour.classList.toggle("dark");
    const wrapperFive = document.querySelector("main div.main-last");
    wrapperFive.classList.toggle("dark");
}
