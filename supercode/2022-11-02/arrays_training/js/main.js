let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);

console.log(numberArray[4]);

let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
let totalSongs = songs.push("Bakery", "Pins And Needles", "Amour");
console.log(totalSongs);
console.log(songs);

let maki = ["shake", "tekka", "kampyo", "tamago"];
maki.unshift("tako", "inari", "avo");
console.log(maki);

// let maki1 = maki.shift();
// console.log(maki1);

// let maki2 = maki.shift();
// console.log(maki2);

// let maki3 = maki.shift();
// console.log(maki3);
let maki4 = [maki.shift(), maki.shift(), maki.shift()];
console.log(maki4);

let heroUndEnemy = [
    ["Batman", "The Joker"],
    ["Professor X", "Magneto"],
    ["Thor", "Loki"],
];
console.log(heroUndEnemy);

heroUndEnemy.push(["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"]);
