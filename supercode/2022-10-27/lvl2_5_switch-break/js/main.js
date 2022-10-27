const bW =
    "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
const bayern = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
const berlin = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
const brandenburg =
    "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
const bremen = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
const hamburg =
    "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
const hessen =
    "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
const mV =
    "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
const niedersachsen =
    "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
const nW =
    "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
const rP =
    "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
const saarland =
    "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
const sachsen =
    "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
const sA =
    "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
const sH =
    "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
const thueringen =
    "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
const defaultBL = "Ein solches Bundesland gibt es in Deutschland nicht.";

function check(event) {
    event.preventDefault();
    const inputText = document
        .getElementById("bundeslandInfo")
        .value.toLowerCase();
    const outputText = document.getElementById("bundeslandInfoErgebnis");
    switch (inputText) {
        case "berlin":
        case "ber":
            outputText.innerHTML = berlin;
            break;
        case "baden-württemberg":
        case "bw":
            outputText.innerHTML = bW;
            break;
        case "bayern":
        case "by":
            outputText.innerHTML = bayern;
            break;
        case "brandenburg":
        case "bb":
            outputText.innerHTML = brandenburg;
            break;
        case "bremen":
        case "hb":
            outputText.innerHTML = bremen;
            break;
        case "nordrhein-westfalen":
        case "nw":
            outputText.innerHTML = nW;
            break;
        case "hessen":
        case "he":
            outputText.innerHTML = hessen;
            break;
        case "hamburg":
        case "hh":
            outputText.innerHTML = hamburg;
            break;
        case "mecklenburg-vorpommern":
        case "mv":
            outputText.innerHTML = mV;
            break;
        case "niedersachsen":
        case "ni":
            outputText.innerHTML = niedersachsen;
            break;
        case "thüringen":
        case "th":
            outputText.innerHTML = thueringen;
            break;
        case "rheinland-pfalz":
        case "rp":
            outputText.innerHTML = rP;
            break;
        case "saarland":
        case "sl":
            outputText.innerHTML = saarland;
            break;
        case "schleswig-holstein":
        case "sh":
            outputText.innerHTML = sH;
            break;
        case "sachsen":
        case "sn":
            outputText.innerHTML = sachsen;
            break;
        case "sachsen-anhalt":
        case "st":
            outputText.innerHTML = sA;
            break;
        default:
            outputText.innerHTML = "probier das bundesland anders zu schreiben";
    }
}
