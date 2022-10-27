const weatherQuality = document.getElementById("quality");

function weather(event) {
    event.preventDefault();
    const quality = weatherQuality.value;
    if (quality > 10) {
        console.log("gibbet nich");
    } else if (quality >= 8) {
        console.log("super");
    } else if (quality >= 6) {
        console.log("gut");
    } else if (quality >= 3) {
        console.log("okay");
    } else if (quality >= 0) {
        console.log("schlecht");
    } else {
        console.log("es gibt keine negativen wetterangaben ò.ó");
    }
}

let age1 = 22;
let height1 = 170;
let age2 = 34;
let height2 = 168;

const valueJohn = age1 * 5 + height1;
const valueMeike = age2 * 5 + height2;

if (valueJohn > valueMeike) {
    console.log("John wins!");
} else if (valueMeike > valueJohn) {
    console.log("Meike wins!");
} else {
    console.log("John and Meike draw!");
}

function checkAirQuality() {
    const rangeQuality = document.getElementById("range-slider");
    const quality = rangeQuality.value;
    if (quality <= 50) {
        document.querySelector("h2").innerHTML =
            "Level of health concern: Good";
        document.querySelector("h3").innerHTML =
            "Level of health effect: Little or no risk";
        document.body.style.backgroundColor = "green";
    } else if (quality <= 100) {
        document.querySelector("h2").innerHTML =
            "Level of health concern: Moderate";
        document.querySelector("h3").innerHTML =
            "Level of health effect: Acceptable quality";
        document.body.style.backgroundColor = "yellow";
    } else {
        document.querySelector("h2").innerHTML =
            "Level of health concern: Unhealthy for sensitive groups ";
        document.querySelector("h3").innerHTML =
            "Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor = "red";
    }
}

function calcDif(event) {
    event.preventDefault();
    const x = document.getElementById("difference").value;
    const dif = Math.abs(x - 27);
    console.log("Differenz vom Ursprungswert: " + dif);
    if (dif <= 27) {
        console.log(dif);
    } else {
        console.log(dif * 2);
    }
}
