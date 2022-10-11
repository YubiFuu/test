//-----------------Aufgabe 1_12

let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score + 10;
console.log("Ergebnis: " + score3);

score3 += 10;
console.log("Ergebnis: " + score3);

let zahl = 1;
//zahl = zahl + 1; <- addiert den wert zahl hinzu
//zahl += 1; <- addiert den wert zahl hinzu (kürzere schreibweise)

zahl++; // <- addiert den wert zahl hinzu (kürzeste schreibweise)
console.log("increment: " + zahl);

zahl--; //subtrahiert den wert zahl (kürzeste schreibweise)
console.log("dekrement: " + zahl);

//-----------------Aufgabe 1_13

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5; // <- 14/5 ist 2 mit rest 4, also wird der wert 4 ausgegeben (der rest wird ausgegeben)
console.log("modulus: " + modulus_operator);
