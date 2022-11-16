let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
let nameArray = [];
edelMetallPreise.forEach((a) => {
    a.name;
    nameArray.push(a.name);
    console.log(a.name);
});
console.log(nameArray);

function allNames(a) {
    return a.name;
}

console.log(edelMetallPreise.map(allNames));

let preiseArray = [];
edelMetallPreise.forEach((a) => {
    a.preiseGramEuro;
    preiseArray.push(a.preiseGramEuro);
    console.log(a.preiseGramEuro);
});
console.log(preiseArray);

function allPreise(a) {
    return a.preiseGramEuro;
}

console.log(edelMetallPreise.map(allPreise));

let changeArray = [];
edelMetallPreise.forEach((a) => {
    a.veraenderung;
    changeArray.push(a.veraenderung);
    console.log(a.veraenderung);
});
console.log(changeArray);

function allChanges(a) {
    return a.veraenderung;
}
console.log(edelMetallPreise.map(allChanges));

const teuer = edelMetallPreise.filter(teureMetalle);
function teureMetalle(a) {
    if (a.preiseGramEuro > 50) {
        return a.preiseGramEuro;
    }
}
console.log(teuer);
