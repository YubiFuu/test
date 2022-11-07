// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//     console.log("********");
// }
// let star = "";
// for (let i = 0; i <= 6; i++) {
//     star += "*";
//     console.log(star);
// }

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 50; i >= 45; i--) {
//     console.log(i);
// }
// let array = [10, 20, 30];

// for (let i of array) {
//     console.log(i * 2);
// }

// array.forEach((a) => {
//     console.log(a * 2);
// });

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] * 2);
// }

for (let i = 0; i < 10; i++) {
    console.log(`Hello World ${i}`);
}

let numArray = [];

for (let i = 0; i < 11; i++) {
    numArray.push(i);
}
console.log(numArray);

let names = [
    "Freddy",
    "Steffen",
    "Finn",
    "Julia",
    "Franzi",
    "Christian",
    "Sergio",
];

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

imgArray = [];

for (i = 1; i < 101; i++) {
    imgArray.push(`image_${i}.jpg`);
}
console.log(imgArray);

let words = [
    "hallo",
    "Auto",
    "Waschmaschine",
    "Schrank",
    "Katze",
    "Beispiel",
    "Eltern",
    "Fenster",
    "Geburtstag",
    "Himmel",
    "schwimmen",
    "Zeitung",
];
let submit = document.querySelector("button[type=submit]");
let numInput = document.getElementById("number-input");
let textOutput = document.querySelector("h1");
submit.addEventListener(`click`, (event) => {
    textOutput.innerHTML = "";
    event.preventDefault();
    words.forEach((a) => {
        if (a.length == Number(numInput.value)) {
            textOutput.innerHTML += a + "<br>";
        }
    });
});
