const pi = Math.PI;
console.log(pi);

roundedPi = Math.round(pi * 100) / 100;
console.log(roundedPi);

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

console.log(array[0]);
array.forEach((num) => {
    console.log(Math.round(num));
});

let textInput = document.getElementById("text-input");
let button1 = document.querySelector("button");
let finalText = document.querySelector("p");

button1.addEventListener(`click`, () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (textInput.value == randomNumber) {
        finalText.innerHTML = `You won! Pc choose: ${randomNumber}`;
    } else {
        finalText.innerHTML = `You loose! Pc choose: ${randomNumber}`;
    }

    console.log(randomNumber);
});

// Auf x-Nachkommerstelle runden.
function roundTo(zahl, accuracy) {
    let sum = "1";
    for (let i = 0; i < accuracy; i++) {
        sum += "0";
    }
    console.log(Math.round(zahl * Number(sum)) / Number(sum));
}
roundTo(10.244456788, 4);

console.log(
    Math.min(
        393,
        205,
        479,
        47,
        376,
        267,
        385,
        2,
        190,
        383,
        286,
        462,
        115,
        138,
        331,
        409,
        427,
        245,
        224,
        276,
        483,
        55,
        147,
        177,
        208,
        347,
        135,
        282,
        33,
        270,
        475,
        426,
        476,
        453,
        474,
        351,
        219,
        358,
        354,
        410,
        240,
        139,
        371,
        356,
        277,
        202,
        264,
        204,
        447,
        488
    )
);
console.log(
    Math.max(
        393,
        205,
        479,
        47,
        376,
        267,
        385,
        2,
        190,
        383,
        286,
        462,
        115,
        138,
        331,
        409,
        427,
        245,
        224,
        276,
        483,
        55,
        147,
        177,
        208,
        347,
        135,
        282,
        33,
        270,
        475,
        426,
        476,
        453,
        474,
        351,
        219,
        358,
        354,
        410,
        240,
        139,
        371,
        356,
        277,
        202,
        264,
        204,
        447,
        488
    )
);

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10) + 1;
let randomNum1_100 = Math.floor(Math.random() * 100) + 1;

console.log(`${randomNum} ${randomNum1_10} ${randomNum1_100}`);
