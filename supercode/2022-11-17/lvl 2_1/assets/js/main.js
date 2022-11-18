const count = document.getElementById("count");
const message = document.querySelector(".message");

window.onload = function startFromBeginning() {
    setInterval(countDown, 1000);
    let num = 10;

    function countDown() {
        count.innerHTML = num;
        if (num > 0) {
            num--;
        } else {
            clearInterval(countDown);
            message.style.opacity = "0";
        }
    }
};
