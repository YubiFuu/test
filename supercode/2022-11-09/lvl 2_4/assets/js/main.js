const selectColor = document.getElementById("farbeAuswahlen");
const subButton = document.getElementById("button");

subButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    switch (selectColor.value) {
        case "1":
            document.body.style.backgroundColor = "#BA55D3";
            break;
        case "2":
            document.body.style.backgroundColor = "#f5fffa";
            break;
        case "3":
            document.body.style.backgroundColor = "#1E90FF";
            break;
        case "4":
            document.body.style.backgroundColor = "#DAA520";
            break;
        case "5":
            document.body.style.backgroundColor = "Wheat";
            break;
        case "6":
            document.body.style.backgroundColor = "#48D1CC";
            break;
        case "7":
            document.body.style.backgroundColor = "Moccasin";
            break;
        case "8":
            document.body.style.backgroundColor = "#B22222";
            break;
        case "9":
            document.body.style.backgroundColor = "#32CD32";
            break;
        case "10":
            document.body.style.backgroundColor = "#708090";
            break;
    }
});
