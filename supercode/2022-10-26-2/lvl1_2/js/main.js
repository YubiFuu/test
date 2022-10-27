function changeColor(event) {
    event.preventDefault();
    const bgCol = document.getElementById("bg-color");
    document.body.style.backgroundColor = bgCol.value;
}
