let n = "Jess";
let nn = "B.";
let age = "100";
console.log(`Ich bin ${n} ${nn} und bin ${age} Jahre alt.`);

console.log(n.length);
console.log(nn.length);
let fullName = n.length + nn.length;

console.log(`${n} + ${nn} besteht aus insgesamt ${fullName} Zeichen.`);

const txt = `How inappropriate to call this planet Earth, when clearly it is Ocean.`;

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

const a = "Susi is going to codingschool";
document.write(a.slice(0, 4) + "<br>");
document.write(a.slice(5, 7) + "<br>");
document.write(a.slice(5, 17) + a.slice(23, 29) + "<br>");
document.write(a.slice(0, 8) + a.slice(23, 29) + "<br>" + "<br>");

const text = "Susi is back from codingschool";
document.write(text.substring(0, 4) + "<br>");
document.write(text.substring(5, 7) + "<br>");
document.write(text.substring(24, 30) + "<br>");
document.write(text.substring(0, 8) + text.substring(24, 30) + "<br>" + "<br>");

const text2 = `Sam is good at codingschool`;
document.write(text2.replace("good", "bad") + "<br>");
document.write(text2.replace("Sam", "Susi") + "<br>");
document.write(text2.replace("codingschool", "tennis") + "<br>" + "<br>");

const text3 = `Sam is going to codingschool`;
document.write(text2.toUpperCase() + "<br>");
document.write(text2.toLowerCase() + "<br>");
document.write(
    text2.substring(0, 3).toUpperCase() +
        text2.substring(3).toLowerCase() +
        "<br>"
);
document.write(
    text2.substring(0, 3).toLowerCase() +
        text2.substring(3, 14).toUpperCase() +
        text2.substring(14).toLowerCase() +
        "<br>"
);
document.write(
    text2.charAt(0).toUpperCase() +
        text2.substring(1, 4).toLowerCase() +
        text2.charAt(4).toUpperCase() +
        text2.substring(5, 7).toLowerCase() +
        text2.charAt(7).toUpperCase() +
        text2.substring(8, 12).toLowerCase() +
        text2.charAt(12).toUpperCase() +
        text2.substring(13, 15).toLowerCase() +
        text2.charAt(15).toUpperCase() +
        text2.substring(16).toLowerCase() +
        "<br>" +
        "<br>"
);
// function workWithString(event) {
//     event.preventDefault();
const textA = "Sam is going to codingschool";
const textB = "Susi";
const textC = "programming bike";
const textD = "and";

const textOne = textA
    .slice(0, 15)
    .concat(" ", textA.slice(22), " ", textD, " to the theater");
document.write(textOne + "<br>");

const textTwo = textA.slice(0, 15).concat(" ", " the theater");
document.write(textTwo + "<br>");

const textThree = textB.concat(
    " ",
    textD,
    " ",
    textA.slice(0, 16),
    textA.slice(22)
);
document.write(textThree + "<br>");

const textFour = textB.concat(
    " ",
    textA.slice(4, 16),
    textA.slice(22),
    " ",
    textD,
    " to the theater"
);
document.write(textFour + "<br>");
// }
