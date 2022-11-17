let output = document.querySelector("p");

let date1 = new Date();
output.innerHTML = `${date1} <br>`;
console.log(date1);

let date2 = new Date(0);
output.innerHTML += `${date2} <br>`;
console.log(date2);

let date3 = new Date(31556908800);
output.innerHTML += `${date3} <br>`;
console.log(date3);

let date4 = new Date(86400000);
output.innerHTML += `${date4} `;
console.log(date4);

let date5 = date1.getFullYear();

let date6 = date1.getMonth();

let date7 = date1.getHours();

let date8 = date1.getMinutes();

let date9 = date1.getSeconds();

let date10 = date1.getDay();

console.log(date5 + " Year");
console.log(date6 + " Month");
console.log(date10 + " Tag");
console.log(date7 + " Stunde");
console.log(date8 + " Minute");
console.log(date9 + " Sekunde");

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
];

console.log(wochenTag[date10]);
console.log(monate[date6]);
date1.setDate(15);
console.log(date1);
date1.setMonth(0);
console.log(date1);
date1.setFullYear(date5 + 30);
console.log(date1);

function getMonth(datum) {
    let month = datum.split(",");
    console.log(monate[month[1] - 1]);
}
getMonth("1410,07,15");

newDate1 = new Date(1999, 10, 5, 15); //PM
newDate2 = new Date();
newDate3 = new Date(2019, 12, 3, 12); //PM
newDate4 = new Date(2000, 1, 1, 11); //AM

function amOrPm(datum) {
    if (datum.getHours() >= 12) {
        return console.log("PM");
    } else {
        return console.log("AM");
    }
}
amOrPm(newDate1);
amOrPm(newDate2);
amOrPm(newDate3);
amOrPm(newDate4);

function recentTime(date) {
    let tt = date.getDate();
    let mm = date.getMonth() + 1;
    let jjjj = date.getFullYear();
    console.log(`${tt}-${mm}-${jjjj}`);
}
recentTime(newDate2);
