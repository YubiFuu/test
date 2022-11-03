let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta",
];
getraenke.sort();
console.log(getraenke);
getraenke.forEach((drink) => {
    document.write(drink + "<br>");
});

let upperDrinks = getraenke.map((drinks) => {
    return drinks.toUpperCase();
});
console.log(upperDrinks);

let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
    30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let array2 = array.map((x) => {
    return x * 2;
});
console.log(array2);

let checkNumber = array.map((x) => {
    if (x % 3 == false) {
        //false means 0 in this case. if there is no rest it gets divided by 3.
        return x + 100;
    } else {
        return x;
    }
});

console.log(checkNumber);
