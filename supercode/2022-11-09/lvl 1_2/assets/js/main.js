let exampleClass = document.querySelectorAll(".example");

function myFunction() {
    for (i = 0; i < exampleClass.length; i++) {
        exampleClass[i].classList.toggle("dark");
    }
}
