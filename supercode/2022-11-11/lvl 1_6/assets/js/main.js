let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true,
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true,
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
];
myMusic[0].favMusic = "Hallo";
myMusic[1].favMusic = "Hallo";
myMusic[2].favMusic = "Hallo";
myMusic[3].favMusic = "Hallo";
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_year + " und " + myMusic[3].release_year);
console.log(myMusic[3].medium[2]);

console.log(String(myMusic[3].title.split(" ").slice(4, 5)));
console.log(myMusic[2].title.split(" ").pop());
console.log(myMusic[1].artist.split(" ").pop());
