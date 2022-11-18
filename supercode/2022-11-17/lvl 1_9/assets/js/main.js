let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let period = document.getElementById("period");

//const today = new Date();

let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function startImmediatly() {
    dateInterval = () => {
        const today = new Date();
        let smallHours = today.getHours();

        if (today.getHours() < 12) {
            period.innerHTML = "AM";
        } else {
            period.innerHTML = "PM";
        }
        if (today.getHours() > 12) {
            smallHours = today.getHours() - 12;
        }
        day.innerHTML = weekDay[today.getDay()];
        hour.innerHTML = smallHours;
        minute.innerHTML = today.getMinutes();
        second.innerHTML = today.getSeconds();
    };
    dateInterval();
    setInterval(dateInterval, 1000);
}
startImmediatly();
