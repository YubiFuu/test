let a = 1 + 3;
console.log("Hello World");
function intro(platzHalter1, platzHalter2) {
    console.log(platzHalter1 + platzHalter2);
}

intro("1+3 = ", a);

function intro2(paramName) {
    let varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + " .");
}

intro2("Jess");

function intro3(name, stadt, alter) {
    console.log(
        "Hallo, mein Name ist " +
            name +
            ". Ich bin " +
            alter +
            " Jahre alt. Ich komme aus " +
            stadt +
            "."
    );
}
intro3("Supercoder", "Düsseldorf", "27");

function math(num1, num2) {
    console.log(num1 * num2);
    console.log(num1 / num2);
}
math(10, 2);
math(5, 0);
math(30, 30);
math(45, 173);
